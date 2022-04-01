import React from "react";
import { Route, Routes } from "react-router-dom";
import NoMatch from "../Pages/NoMatch";
import Gym from "../Pages/Trainers/Gyms/Gym";
import Gyms from "../Pages/Trainers/Gyms/Gyms";
import TrainersHome from "../Pages/Trainers/TrainersHome";


export const TrainersRoutes = () =>{
  return(
    <Routes>
      <Route path='/' element={<TrainersHome/>}/>
      <Route path='/gyms' element={<Gyms/>}/>
      <Route path='/gyms/:id' element={<Gym/>}/>
      <Route path='/badges' element={<TrainersHome/>}/>
      <Route path='/*' element={<NoMatch/>}/>
    </Routes>
  )
}