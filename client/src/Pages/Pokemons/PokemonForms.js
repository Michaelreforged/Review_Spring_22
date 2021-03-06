import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { DataContext } from "../../Providers/DataProvider";

const PokeForm = (props) => {
  const nav = useNavigate();
  const params = useParams();
  const [name, setName] = useState("")
  const [species, setSpecies] = useState("")
  const [location, setLocation] = useState("")
  const {addPokemon,updatedPoke} = useContext(DataContext)
  const [error, setError] = useState(false)
  const [errorMsg, setErrorMsg] = useState(false)

  const checkPoke = async () =>{
    if( params.id){
      try {
        let res = await axios.get(`/api/pokemons/${params.id}`);
        setName(res.data.name)
        setLocation(res.data.location)
      } catch (err) {
        
      }
    }
  }

  useEffect(()=>{
    checkPoke()
  },[])

  const handleSubmit = async (e) =>{
    e.preventDefault()
    if(params.id){
      try{
        await axios.put(`/api/pokemons/${params.id}`,{name,location})
        updatedPoke()
        nav(`/pokemons/${params.id}`)
      }catch(err){
        console.log(err)
      }
    }else{
      try {
        await axios.post('/api/pokemons',{name,location})
        addPokemon({name,location})
        nav('/pokemonspage/')
      } catch (err) {
        console.log(err.response.data.errors)
        setError(true)
        setErrorMsg(err.response.data.errors.toString())
      }
    }
  }

  return(
    <form onSubmit={handleSubmit}>
      <h1>{params.id ? 'Update Pokemon' : 'New Pokemon'}</h1>
      <p>Name</p>
      <input
      value={name}
      placeholder={name}
      onChange={(e)=>{setName(e.target.value)}}
      />
      <br/>
      <p>Species</p>
      <input
      value={species}
      placeholder={species}
      onChange={(e)=>{setSpecies(e.target.value)}}
      />
      <br/>
      <p>Location</p>
      <input
      value={location}
      
      placeholder={location}
      onChange={(e)=>{setLocation(e.target.value)}}
      />
      <br/>
      <button>{params.id ? "Update":"Add"}</button>

      {error ? <p>{errorMsg}</p>:<></>}
    </form>
  )

}

export default PokeForm