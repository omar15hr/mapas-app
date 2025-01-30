import { Map } from "@maptiler/sdk";
import { createContext } from "react";

interface MapContextProps {
  isMapReady: boolean;
  map?: Map
}


export const MapContext = createContext({} as MapContextProps);