import { createContext } from "react";

interface PlacesContextProps {
  isLoading: boolean;
  userLocation?: [ number, number ];
}

export const PlacesContext = createContext<PlacesContextProps>({} as PlacesContextProps);