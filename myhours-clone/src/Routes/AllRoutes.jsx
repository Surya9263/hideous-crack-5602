import React from 'react'
import Terms from '../pages/AuthPages/Terms'
import HowItWorks from '../pages/HowItWorks'
import Login from '../pages/AuthPages/SignIn'
import {Routes,Route} from "react-router-dom"
import Signup from '../pages/AuthPages/SignUp'
import Success from '../pages/AuthPages/Success'
import Support from '../components/fw18-1237/Support'
import Pricing from '../components/Pricing_page/Pricing'
import UseCasePage from '../components/useCasePage/UseCasePage'
import LandingPage from '../components/Landing_Page/LandingPage'


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
