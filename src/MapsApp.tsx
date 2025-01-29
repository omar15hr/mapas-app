import { PlacesProvider } from "./context/places/PlacesProvider"
import { HomeScreen } from "./screens/HomeScreen"
import './index.css'

export const MapsApp = () => {
  return (
    <PlacesProvider>
      <HomeScreen/>
    </PlacesProvider>
  )
}