import React, { useEffect, useState } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom"

export const AuthContext = React.createContext();

const AuthProvider = (props) =>{

  const [user, setUser] = useState(null)
  const [checked, setChecked] = useState(false)
  const nav = useNavigate()

  const handleRegister = async (user) =>{
    try {
      let res = await axios.post('/api/auth',user)
      setUser(res.data.data)
      nav('/trainers')
    } catch (err) {
      alert("Error with Register")
      console.log(err)
    }
  }

  const handleLogin = async (user) =>{
    try {
      let res = await axios.post('/api/auth/sign_in',user)
      setUser(res.data.data)
      nav('/trainers')
    } catch (err) {
      alert("error with Login")
    }
  }

  const handleLogout = async () =>{
    try {
      await axios.delete('/api/auth/sign_out')
      setUser(null)
      localStorage.removeItem("access-token")
    } catch (err) {
      alert("error with Logout")
    }
  }

  const providerItems = {
    checked,
    setChecked,
    handleRegister,
    handleLogin,
    handleLogout,
    user,
    setUser
  }

  return(
    <AuthContext.Provider value = {providerItems}>
      {props.children}
    </AuthContext.Provider>
  )

}

export default AuthProvider