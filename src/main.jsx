import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
/* import App from './App.jsx' */
import {Greeting, MyFavoriteFood} from './Greeting.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Greeting></Greeting>
    <MyFavoriteFood></MyFavoriteFood>
  </StrictMode>,
)
