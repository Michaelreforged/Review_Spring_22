import React from "react";
import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "../Components/Protected";
import NoMatch from "../Pages/NoMatch";
import Badges from "../Pages/Trainers/Badges/Badge";
import Gyms from "../Pages/Trainers/Gyms/Gyms";
import TrainerFight from "../Pages/Trainers/TrainerFight";
import TrainerParty from "../Pages/Trainers/TrainerParty";
import Trainers from "../Pages/Trainers/Trainers";


export const TrainerRoutes = () =>{
  return(
    <Routes>
      <Route element={<ProtectedRoute/>}>
        <Route path='/' element={<Trainers/>}/>
        <Route path='/gym' element={<Gyms/>}/>
        <Route path='/badge' element={<Badges/>}/>
        <Route path='/party' element={<TrainerParty/>}/>
        <Route path='/:id' element={<TrainerFight/>}/>
        <Route path='/*' element={<NoMatch/>}/>
      </Route>
    </Routes>
  )
}