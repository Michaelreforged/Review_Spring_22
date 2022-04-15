import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Notificationstest = () => {
  const [notif, setNotif] = useState([])
  const nav = useNavigate()
  useEffect(()=>{
    getNotif()
  },[])

  const getNotif = async()=>{
    try {
      let res = await axios.get('/notifications')
      console.log(res)
      setNotif(res.data)
    } catch (err) {
      console.log(err)
    }
  }

  const readAll = async() =>{
    try {
      await axios.put('/read_all')
      setNotif([])
    } catch (err) {
      
    }
  }
  const readOne = async(id) =>{
    try {
      await axios.put(`/read_one/${id}`)
      setNotif(notif.filter((note)=>note.id != id))
    } catch (err) {
      
    }
  }

  const renderNotif = () =>{
    return notif.map((note) =>(
      <div key={note.id}>
        <p> {note.notifiable_type} {note.action}</p>
        <button onClick={()=>{nav(`/pokemons/${note.notifiable_id}`)}}>Got to {note.notifiable_type}</button>
        <button onClick={()=>{readOne(note.id)}} >Read</button>
      </div>
    ))
  }

  return (
    <div>
      <h1>Test Page</h1>
      {notif.length > 0 ? renderNotif() : <p>All caught up</p> }
      <button onClick={()=>{readAll()}}>Read All</button>
    </div>
  );
};

export default Notificationstest;
