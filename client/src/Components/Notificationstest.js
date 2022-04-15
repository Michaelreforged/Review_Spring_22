import axios from "axios";
import React, { useEffect, useState } from "react";

const Notificationstest = () => {
  const [notif, setNotif] = useState([])

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
      let res = await axios.put('/read_all')
      setNotif([])
    } catch (err) {
      
    }
  }
  const readOne = async(id) =>{
    try {
      let res = await axios.put(`/read_one/${id}`)
      setNotif(notif.filter((note)=>note.id != id))
    } catch (err) {
      
    }
  }

  const renderNotif = () =>{
    return notif.map((note) =>(
      <div key={note.id}>
        {note.id}
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
