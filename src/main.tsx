import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { MapsApp } from './MapsApp'

if ( !navigator.geolocation ) {
  alert('Geolocalización no soportada en este navegador');
  throw new Error('Geolocalización no soportada en este navegador');
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MapsApp />
  </React.StrictMode>,
)
