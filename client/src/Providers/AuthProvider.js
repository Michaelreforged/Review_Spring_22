import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const AuthContext = React.createContext();

const AuthProvider = (props) =>{

  const [user, setUser] = useState(null)
  const nav = useNavigate()

  const handleRegister = async (user)=>{
    try{
      let res = await axios.post('/api/auth',user)
      setUser(res.data.data)
      nav('/trainers')
    }catch(err){
      console.log(err)
      alert("Error creating User")
    }
  }

  const handleLogin = async (user)=>{
    try {
      let res = axios.post('api/auth/sign_in',user)
      setUser(res.data.data)
      nav('/trainers')
    } catch (err) {
      alert("issues logging in check email and password")
    }
  }

  const handleLogout = async ()=>{
    try{
      await axios.delete('api/auth/sign_out')
      setUser(null)
      localStorage.removeItem("access-token")
      nav('/')
    }catch(err){
      alert("issues Logging out")
    }
  }

  const providerItems = {
    user,
    handleRegister,
    handleLogin,
    handleLogout,
    setUser,
    auth: user?true:false,
  }

  return(
    <AuthContext.Provider value = {providerItems}>
      {props.children}
    </AuthContext.Provider>
  )

}

export default AuthProvider