import React from "react";
import Team from "../components/Team_Page/Team";
import Apps from "../pages/AuthorizedPage/Apps";
import Help from "../pages/AuthorizedPage/Help";
import { Route, Routes } from "react-router-dom";
import Project from "../components/fw18-1237/Project";
import WhatNew from "../pages/AuthorizedPage/WhatNew";
import AddTeam from "../components/Team_Page/AddTeam";
import Clients from "../pages/AuthorizedPage/Clients";
import AllHours from "../pages/AuthorizedPage/Allhours";
import UserCreds from "../pages/AuthorizedPage/UserCreds";
import AddClient from "../components/clients-page/AddClient";
import Track_page from "../components/Track_page/Track_page";
import EditClient from "../components/clients-page/EditClient";
import AccountSetting from "../pages/AuthorizedPage/AcountSetting";

const AllInnerRoutes = () => {
  return (
    <Routes>
      <Route path="/apps" element={<Apps />} />
      <Route path="/help" element={<Help />} />
      <Route path="/users" element={<Team />} />
      <Route path="/whatNew" element={<WhatNew />} />
      <Route path="/clients" element={<Clients />} />
      <Route path="/projects" element={<Project />} />
      <Route path="/login/" element={<Track_page />} />
      <Route path="/allHours" element={<AllHours />} />
      <Route path="/users/new" element={<AddTeam />} />
      <Route path="/UserCreds" element={<UserCreds />} />
      <Route path="/clients/new" element={<AddClient />} />
      <Route path="/clients/:id" element={<EditClient />} />
      <Route path="/accountSetting" element={<AccountSetting />} />
    </Routes>
  );
};

export default AllInnerRoutes;
