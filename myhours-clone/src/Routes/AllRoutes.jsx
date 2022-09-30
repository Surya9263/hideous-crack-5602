import React from 'react'
import {Routes,Route} from "react-router-dom"
import LandingPage from '../components/Landing_Page/LandingPage'
import Login from '../pages/AuthPages/SignIn'
import Success from '../pages/AuthPages/Success'
import Terms from '../pages/AuthPages/Terms'
import Signup from '../pages/AuthPages/SignUp'
import Support from '../components/utkarsh/Support'
import UseCasePage from '../components/useCasePage/UseCasePage'
import HowItWorks from '../pages/HowItWorks'
import Pricing from '../components/Pricing_page/Pricing'
const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<LandingPage/>} />
            <Route path="/how-it-works" element={<HowItWorks/>} />
            <Route path="/use-cases" element={<UseCasePage/>} />
            <Route path="/pricing" element={<Pricing/>} />
            <Route path="/support" element={<Support/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/signup" element={<Signup/>} />
            <Route path="/success" element={<Success/>} />
            <Route path="/terms" element={<Terms/>} />
        </Routes>
    </div>
  )
}

export default AllRoutes