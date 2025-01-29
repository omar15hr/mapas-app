import { useReducer } from "react";
import { PlacesContext } from "./PlacesContext";
import { placesReducer } from "./placesReducer";

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

  return (
    <PlacesContext.Provider value={{
      ...state,
    }}>
      {children}
    </PlacesContext.Provider>
  )
}