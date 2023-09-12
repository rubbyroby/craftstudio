import { BrowserRouter, Routes, Route, } from "react-router-dom"
import HomeEn from './pages/HomeEn'
import HomeFr from './pages/HomeFr'
import HomeAr from './pages/HomeAr'
import ThankEn from "./components/thank/ThankEn"
import ThankFr from "./components/thank/ThankFr"
import ThankAr from "./components/thank/ThankAr"
import Welcome from '../src/components/welcome/Hi'
import Error from './components/erreur/Erreur'
import './App.css'

import { AnimatePresence } from "framer-motion"

export default function App() {


  return (
    <div>
      <AnimatePresence mode="wait">
      <BrowserRouter>
      
      {/*        <Route path="/Merci/:userName" element={<ThankFr/>} /> */}
      <Routes >
        <Route index element={<Welcome/>}/>
        <Route path="/Home" element={<HomeEn/>}/>
        <Route path="/Accueille" element={<HomeFr/>}/>
        <Route path="/استقبال" element={<HomeAr/>}/>
        <Route path="/Thankyou" element={<ThankEn/>} />
        <Route path="/Merci" element={<ThankFr/>} />
        <Route path="/شكرا" element={<ThankAr/>} />
        <Route path="*" element={<Error/>} />
      </Routes>
      </BrowserRouter>
      </AnimatePresence>
      
    </div>
  )
}