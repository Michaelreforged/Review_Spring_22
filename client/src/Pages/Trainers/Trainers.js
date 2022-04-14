import React, { useState } from "react";
import axios from "axios"

const Trainers = ()=>{
  const [ trainers, setTrainers] = useState([])

  const getTrainers = async () => {
    try {
      let res = await axios.get("/api/")
    } catch (err) {
      
    }
  }


  return(
    <div>
      <h1>Trainers</h1>
    </div>
  )
}

export default Trainers