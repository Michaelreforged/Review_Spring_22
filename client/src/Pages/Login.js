import React, { useContext, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const Login = () =>{
  const [email, setEmail] = useState("test@test.com") 
  const [password, setPassword] = useState("123456") 
  const {handleLogin} = useContext(AuthContext)

  const handleSubmit=(e) =>{
    e.preventDefault()
    console.log(email,password)
    handleLogin({email,password})
  }

  return(
    <div>
      <h1>Login</h1>
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
      <button>Submit</button>
      </form>
    </div>
  )

}

export default Login