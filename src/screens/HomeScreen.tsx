import { BtnMyLocation } from "../components/BtnMyLocation"
import { MapView } from "../components/MapView"

export const HomeScreen = () => {
  return (
    <div>
      <MapView />
      <BtnMyLocation />
    </div>
  )
}