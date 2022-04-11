import axios from "axios";
import React, { useContext, useEffect, useState, }  from "react";
import RenderPokemons from "./RenderPokemons";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../../Providers/DataProvider";
import { RenderDiv } from "../../SyledComp/Divs";


const PokemonsPage = () =>{
  const { updatedPoke } = useContext(DataContext)

  const [per, setPer] = useState(30)
  const [count, setCount] = useState(1)
  const [pokemons, setPokemons] = useState([]);
  const nav = useNavigate()

  useEffect(()=>{
    getPokemons()
  },[])

  const getPokemons = async () =>{
    try {
      let res = await axios.get('/api/pagepokemon/')
      console.log(res)
      setPokemons(res.data.pokemon)
      setPer(res.data.per)
      setCount(res.data.count)
    } catch (err) {
      console.log(err)
    }
  }

  const newPokemons = async (page) =>{
    try {
      let res = await axios.get(`/api/pagepokemon?page=${page}`)
      setPokemons(res.data.pokemon)
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

  const renderButtons = () =>{
    const numPage = Math.ceil(count/per) //Finding out how many pages is possible upper bound so that if we had fraction it would round up
    const buttonArr = []
    for(let i = 1; i <=numPage; i++){
      buttonArr.push(<button onClick={()=>{newPokemons(i)}} key={i}>{i}</button>)
    }
    return buttonArr
  }

  return(
    <div style={{margin:"10px"}}>
    <h1>Pokemons</h1>
    <button onClick={()=>{nav(`/pokemons/new`)}}>Add New Pokemon</button>
    {renderButtons()}
    <RenderDiv>
    <RenderPokemons pokemons={pokemons} deletePoke={deletePoke}/>
    </RenderDiv>
    </div>
  )

}

export default PokemonsPage