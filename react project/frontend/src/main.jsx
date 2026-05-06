import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Practices } from './Practices.jsx'
import NetflixSeries from './components/Series.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <NetflixSeries/>
  </StrictMode>,
)
