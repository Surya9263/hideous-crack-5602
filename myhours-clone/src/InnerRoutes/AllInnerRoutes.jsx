import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AddClient from '../components/clients-page/AddClient'
import EditClient from '../components/clients-page/EditClient'
import Project from '../components/fw18-1237/Project'
import AddTeam from '../components/Team_Page/AddTeam'
import Team from '../components/Team_Page/Team'
import Track_page from '../components/Track_page/Track_page'
import AccountSetting from '../pages/AuthorizedPage/AcountSetting'
import AllHours from '../pages/AuthorizedPage/Allhours'
import Apps from '../pages/AuthorizedPage/Apps'
import Clients from '../pages/AuthorizedPage/Clients'
import Help from '../pages/AuthorizedPage/Help'
import UserCreds from '../pages/AuthorizedPage/UserCreds'
import WhatNew from '../pages/AuthorizedPage/WhatNew'

// feedback: fw17_0915 and fw19_0963 - You can organise routes in different modules or sub-modules, it will make the structure better
const AllInnerRoutes = () => {
  return (
    <Routes>
        <Route path="/login/" element={<Track_page/>}/>
        <Route path="/projects" element={<Project/>}/>
        <Route path="/clients" element={<Clients/>} />
        <Route path="/clients/new" element={<AddClient/>} />
        <Route path="/users" element={<Team/>} />
        <Route path="/accountSetting" element={<AccountSetting/>} />   
        <Route path="/apps" element={<Apps/>} />
        <Route path="/help" element={<Help/>} />
        <Route path="/whatNew" element={<WhatNew/>} />
        <Route path="/clients/:id" element={<EditClient/>} />
        <Route path="/users/new" element={<AddTeam/>} />
        <Route path="/UserCreds" element={<UserCreds/>} />
        <Route path="/allHours" element={<AllHours/>} />
    </Routes>
  )
}

export default AllInnerRoutes
