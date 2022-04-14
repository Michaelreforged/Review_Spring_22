import React, { useContext, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const Register = () =>{
  const [email, setEmail] = useState("test@test.com") 
  const [password, setPassword] = useState("123456") 
  const [passwordConfrim, setPasswordConfirm] = useState("123456") 
  const {handleRegister} = useContext(AuthContext)

  const handleSubmit=(e) =>{
    e.preventDefault()
    if(password !== passwordConfrim){
      alert("Password Do Not Match")
      return
    }
    console.log(email,password)
    handleRegister({email,password})
  }

  return(
    <div>
      <h1>Register</h1>
      <br/>
      <p>Email</p>
      <form onSubmit={handleSubmit}>

      <input
      value={email}
      placeholder={email}
      onChange={(e)=>{setEmail(e.target.value)}}
      />
      <br/>
      <p>Password</p>
      <input
      value={password}
      placeholder={password}
      onChange={(e)=>{setPassword(e.target.value)}}
      />
      <p>Password Confrim</p>
      <input
      value={passwordConfrim}
      placeholder={passwordConfrim}
      onChange={(e)=>{setPasswordConfirm(e.target.value)}}
      />
      <button>Submit</button>
      </form>
    </div>
  )

}

export default Register