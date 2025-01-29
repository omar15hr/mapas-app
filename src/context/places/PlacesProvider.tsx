import { PlacesContext } from "./PlacesContext";

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
  return (
    <PlacesContext.Provider value={{
      isLoading: true,
      userLocation: undefined
    }}>
      {children}
    </PlacesContext.Provider>
  )
}