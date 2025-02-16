import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import "bootstrap/dist/css/bootstrap.min.css";  
import "bootstrap/dist/js/bootstrap.bundle.min"; 
import Applayout from './Applayout/Applayout.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Applayout />
  </StrictMode>,
)
