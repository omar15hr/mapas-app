import { useEffect, useReducer } from "react";
import { PlacesContext } from "./PlacesContext";
import { placesReducer } from "./placesReducer";
import { getUserLocation } from "../../helpers/getUserLocation";

export interface PlacesState {
  isLoading: boolean;
  userLocation?: [ number, number ];
}

export interface Props {
  children: JSX.Element | JSX.Element[];
}

const initialState: PlacesState = {
  isLoading: true,
  userLocation: undefined,
};

export const PlacesProvider = ({ children }: Props) => {

  const [ state, dispatch ] = useReducer(placesReducer, initialState);

  useEffect(() => {
    getUserLocation()
      .then(lngLat => dispatch({ type: 'setUserLocation', payload: lngLat }))
  }, []);

  return (
    <PlacesContext.Provider value={{
      ...state,
    }}>
      {children}
    </PlacesContext.Provider>
  )
}