import React from 'react'
import {Routes,Route} from "react-router-dom"
import LandingPage from '../components/Landing_Page/LandingPage'
import Pricing from '../components/Pricing_page/Pricing'
import Support from '../components/utkarsh/Support'
import Login from '../pages/AuthPages/SignIn'
import HowItWorks from '../pages/HowItWorks'
const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<LandingPage/>} />
            <Route path="/" element={<HowItWorks/>} />
            <Route path="/" element={<Pricing/>} />
            <Route path="/" element={<Support/>} />
            <Route path="/" element={<Login/>} />
        </Routes>
    </div>
  )
}

export default AllRoutes