import React, { useEffect, useState } from "react";
import axios from "axios"
import {useNavigate} from "react-router-dom"

const Trainers = ()=>{
  const [ trainers, setTrainers] = useState([])
  const nav = useNavigate()
  useEffect(()=>{
    getTrainers()
  },[])

  const getTrainers = async () => {
    try {
      let res = await axios.get("/api/trainers")
      setTrainers(res.data)
    } catch (err) {
      console.log("errors getting trainers")
    }
  }

  const renderTrainers = () =>{
    return trainers.map((t)=>(
      <div key={t.id}>
        <h1>{t.name}</h1>
        <button onClick={()=>{nav(`${t.id}`)}}>Fight!!</button>
      </div>
    ))
  }

  return(
    <div>
      <h1>Make Eye Contact with a Trainer!!</h1>
      {renderTrainers()}
    </div>
  )
}

export default Trainers