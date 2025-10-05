import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {add, subtract, multiply, division} from "./calculator.js";

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <p>Addition: {add(1,2)}</p>
      <p>Subtraction: {subtract(10,2)}</p>
      <p>Multiply: {multiply(3,2)}</p>
      <p>Division: {division(10,2)}</p>
    <App />
  </StrictMode>,
)
