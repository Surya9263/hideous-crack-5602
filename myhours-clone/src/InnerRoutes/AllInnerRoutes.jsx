import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AddClient from '../components/clients-page/AddClient'
import ClientData from '../components/clients-page/ClientData'
import AddTeam from '../components/Team_Page/AddTeam'
import Team from '../components/Team_Page/Team'
import Track_page from '../components/Track_page/Track_page'

const AllInnerRoutes = () => {
  return (
    <Routes>
        <Route to="/track" path={<Track_page/>}/>
        {/* <Route to="/projects" path={}/> */}
        <Route to="/clients" element={<ClientData/>} />
        <Route to="/clients/new" element={<AddClient/>} />
        <Route to="/users" element={<Team/>} />
        <Route to="/users/new" element={<AddTeam/>} />   
    </Routes>
  )
}

export default AllInnerRoutes