import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import PageCreation from "./components/AjoutContenu/PageCreation.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.scss'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<App/>}/>
              <Route path='/ajout-element' element={<PageCreation/>}/>
          </Routes>
      </BrowserRouter>
  </React.StrictMode>,
)
