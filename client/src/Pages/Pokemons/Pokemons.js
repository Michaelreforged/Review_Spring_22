import axios from "axios";
import React, { useContext, useEffect, useState, }  from "react";
import RenderPokemons from "./RenderPokemons";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../../Providers/DataProvider";


const Pokemons = (props) =>{
  const { updatedPoke } = useContext(DataContext)
  console.log(props)
  
  const [pokemons, setPokemons] = useState([]);
  const nav = useNavigate()
  useEffect(()=>{
    getPokemons()
  },[])

  const getPokemons = async () =>{
    try {
      let res = await axios.get('/api/pokemons')
      console.log(res)
      setPokemons(res.data)
    } catch (err) {
      console.log(err)
    }
  }

  const deletePoke = async (id) =>{
    try{
      await axios.delete(`/api/pokemons/${id}`)
      const updatePoke = pokemons.filter((p)=>(p.id !==id))
      setPokemons(updatePoke)
      updatedPoke()
    }catch(err){
      console.log(err)
    }
  }

  return(
    <>
    <h1>Pokemons</h1>
    <button onClick={()=>{nav(`/pokemons/new`)}}>Add New Pokemon</button>
    <RenderPokemons pokemons={pokemons} deletePoke={deletePoke}/>
    </>
  )

}

export default Pokemons