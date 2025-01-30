import { useContext, useEffect, useRef } from "react";
import { PlacesContext } from "../context/places/PlacesContext";
import { Loading } from "./Loading";
import "@maptiler/sdk/dist/maptiler-sdk.css";
import * as maptilersdk from "@maptiler/sdk";

export const MapView = () => {
  const { isLoading, userLocation } = useContext(PlacesContext);
  const mapContainer = useRef<HTMLDivElement | null>(null);
  const map = useRef<maptilersdk.Map | null>(null);
  
  maptilersdk.config.apiKey = 'XUGy7eUo2AC2j8vRzhwf';

   useEffect(() => {
    if (!mapContainer.current || !userLocation) return;
    if (map.current) return;

    map.current = new maptilersdk.Map({
      container: mapContainer.current,
      style: maptilersdk.MapStyle.STREETS,
      center: userLocation,
      zoom: 14
    });

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading]);

  if (isLoading) return <Loading />;
  

  return (
    <div
      ref={mapContainer} className="map"
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
