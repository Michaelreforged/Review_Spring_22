import axios from "axios";
import React, { useContext, useEffect, useState, }  from "react";
import RenderPokemons from "./RenderPokemons";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../../Providers/DataProvider";
import { RenderDiv } from "../../SyledComp/Divs";


const Pokemons = () =>{
  const { updatedPoke } = useContext(DataContext)

  
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
    <div style={{margin:"10px"}}>
    <h1>Pokemons</h1>
    <button onClick={()=>{nav(`/pokemons/new`)}}>Add New Pokemon</button>
    <RenderDiv>
    <RenderPokemons pokemons={pokemons} deletePoke={deletePoke}/>
    </RenderDiv>
    </div>
  )

}

export default Pokemons