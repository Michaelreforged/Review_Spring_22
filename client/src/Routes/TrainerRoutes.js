import React from "react";
import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "../Components/Protected";
import NoMatch from "../Pages/NoMatch";
import Badges from "../Pages/Trainers/Badges/Badge";
import Gyms from "../Pages/Trainers/Gyms/Gyms";
import Trainers from "../Pages/Trainers/Trainers";


export const TrainerRoutes = () =>{
  return(
    <ProtectedRoute>
      <Route path='/' element={<Trainers/>}/>
      <Route path='/gym' element={<Gyms/>}/>
      <Route path='/badge' element={<Badges/>}/>

      <Route path='/*' element={<NoMatch/>}/>
    </ProtectedRoute>
  )
}