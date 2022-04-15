import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

const NotificationTest = () =>{

  const [notif, setNotif] = useState([])
  const nav = useNavigate()

  const getNotif = async () =>{
    try {
      let res = await axios.get("/api/notifications")
      console.log(res)
      setNotif(res.data)
    } catch (err) {
      console.log(err)
    }
  }
  useEffect(()=>{
    getNotif()
  },[])
   
  const read = async(id) =>{
    let res = await axios.put(`/api/read_one/${id}`)
    setNotif(res.data)
  }
  const readAll = async(id) =>{
    let res = await axios.put(`/api/read_all/`)
    setNotif(res.data)
  }

  const render = ()=>{
    return notif.map((note)=>(
      <div>
        <h1>{note.notifiable_type} {note.action}</h1>
        <button onClick={()=>read(note.id)}>Read Notifications</button>
        <button onClick={()=>nav(`/pokemons/${note.notifiable_id}`)}>Got To new Pokemon</button>
      </div>
    ))
  }

  return(
    <div>
      <h1>Notifications</h1>
      {render()}
      <button onClick={()=>readAll()}>Read All Notifications</button>
    </div>
  )
}

export default NotificationTest