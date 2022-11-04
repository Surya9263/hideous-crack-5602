import React from 'react'
import {Routes,Route} from "react-router-dom"
import LandingPage from '../components/Landing_Page/LandingPage'
import Login from '../pages/AuthPages/SignIn'
import Success from '../pages/AuthPages/Success'
import Terms from '../pages/AuthPages/Terms'
import Signup from '../pages/AuthPages/SignUp'

import UseCasePage from '../components/useCasePage/UseCasePage'
import HowItWorks from '../pages/HowItWorks'
import Pricing from '../components/Pricing_page/Pricing'
import Support from '../components/fw18-1237/Support'

// feedback - fw17_0915, fw19_0963 - you can create navigation bar can be much better approach

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
