import { useContext } from "react";
import { MapContext } from "../context/map/MapContext";
import { PlacesContext } from "../context/places/PlacesContext";

export const BtnMyLocation = () => {
  const { map, isMapReady } = useContext(MapContext);
  const { userLocation } = useContext(PlacesContext);

  const handleClick = () => {
    if (!isMapReady) return;
    if (!userLocation) return;

    map?.flyTo({ zoom: 14, center: userLocation });
  };

  return (
    <button
      className="btn btn-primary"
      onClick={handleClick}
      style={{ position: "fixed", top: "10px", right: "60px", zIndex: 999 }}
    >
      My Location
    </button>
  );
};
