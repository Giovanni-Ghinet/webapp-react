import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css'
// Bootstrap Icons CSS
import 'bootstrap-icons/font/bootstrap-icons.css'
// Bootstrap JS
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

import './styles/index.css'


import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
