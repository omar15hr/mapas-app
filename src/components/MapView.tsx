import { useContext, useEffect, useRef } from "react";
import { PlacesContext } from "../context/places/PlacesContext";
import { Loading } from "./Loading";
import "@maptiler/sdk/dist/maptiler-sdk.css";
import * as maptilersdk from "@maptiler/sdk";
import { MapContext } from "../context/map/MapContext";

const apiKey = import.meta.env.VITE_MAPTILER_API_KEY;

export const MapView = () => {

  const { isLoading, userLocation } = useContext(PlacesContext);
  const mapContainer = useRef<HTMLDivElement | null>(null);
  const map = useRef<maptilersdk.Map | null>(null);
  const { setMap } = useContext(MapContext);

  maptilersdk.config.apiKey = apiKey;

  useEffect(() => {
    if (!mapContainer.current || !userLocation) return;
    if (map.current) return;

    if (!isLoading) {
      map.current = new maptilersdk.Map({
        container: mapContainer.current,
        style: maptilersdk.MapStyle.STREETS,
        center: userLocation,
        zoom: 14,
      });

      setMap(map.current);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading]);

  if (isLoading) return <Loading />;

  return (
    <div
      ref={mapContainer}
      className="map"
      style={{
        height: "100vh",
        left: 0,
        position: "fixed",
        top: 0,
        width: "100vw",
      }}
    >
      {userLocation?.join(", ")}
    </div>
  );
};
