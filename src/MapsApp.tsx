import { PlacesProvider } from "./context/places/PlacesProvider"

export const MapsApp = () => {
  return (
    <PlacesProvider>
      <h1>Hola</h1>
    </PlacesProvider>
  )
}