import { Map, Marker, Popup } from "@maptiler/sdk";
import { useReducer } from "react";
import { MapReducer } from "./MapReducer";
import { MapContext } from "./MapContext";


export interface MapState {
  isMapReady: boolean;
  map?: Map;
}

interface Props {
  children: JSX.Element | JSX.Element[];
}

const initialState: MapState = {
  isMapReady: false,
  map: undefined,
};

export const MapProvider = ({children}: Props) => {

  const [state, dispatch] = useReducer(MapReducer, initialState);

  const setMap = (map: Map) => {

    const myLocationPopup = new Popup()
      .setHTML(`
        <h4>Here you are</h4>
        <p>In this location you can see the map</p>
      `)

    new Marker()
      .setLngLat(map.getCenter())
      .setPopup(myLocationPopup)
      .addTo(map);

    dispatch({ type: 'setMap', payload: map });
  }

  return (
    <MapContext.Provider value={{
      ...state,
      setMap,
    }}>
      {children}
    </MapContext.Provider>
  );
};