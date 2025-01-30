import { MapState } from "./MapProvider";
import { Map } from "maplibre-gl";


type MapAction = { type: 'setMap', payload: Map };

export const MapReducer = ( state: MapState, action: MapAction): MapState => {

  switch (action.type) {

    // case 'setMap':
    //   return {
        
    //   };

    default:
      return state;
  }
}