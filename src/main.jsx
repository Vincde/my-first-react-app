import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
/* import App from './App.jsx' */
import {Greeting, MyFavoriteFood, ILovePizza} from './Greeting.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Greeting></Greeting>
    <MyFavoriteFood></MyFavoriteFood>
    <ILovePizza></ILovePizza>
  </StrictMode>,
)
