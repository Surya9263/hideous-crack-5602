import React from 'react'
import {Routes,Route} from "react-router-dom"
import LandingPage from '../components/Landing_Page/LandingPage'
import Pricing from '../components/Pricing_page/Pricing'
import UseCasePage from '../components/useCasePage/UseCasePage'
import Support from '../components/utkarsh/Support'
import Login from '../pages/AuthPages/SignIn'
import HowItWorks from '../pages/HowItWorks'
const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<LandingPage/>} />
            <Route path="/how-it-works" element={<HowItWorks/>} />
            <Route path="/use-cases" element={<UseCasePage/>} />
            <Route path="/pricing" element={<Pricing/>} />
            <Route path="/support" element={<Support/>} />
            <Route path="/signin" element={<Login/>} />
        </Routes>
    </div>
  )
}

export default AllRoutes