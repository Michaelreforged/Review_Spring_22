import React, { useEffect, useState } from "react";
import axios from "axios"

const Trainers = ()=>{
  const [ trainers, setTrainers] = useState([])

  useEffect(()=>{
    getTrainers()
  },[])

  const getTrainers = async () => {
    try {
      let res = await axios.get("/api/trainers")
      console.log(res)
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