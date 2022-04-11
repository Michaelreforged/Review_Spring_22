import axios from "axios";
import React, { useContext, useEffect, useState, }  from "react";
import RenderPokemons from "./RenderPokemons";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../../Providers/DataProvider";
import { RenderDiv } from "../../SyledComp/Divs";
import InfiniteScroll from "react-infinite-scroll-component"

const PokemonsInfi = () =>{
  const { updatedPoke } = useContext(DataContext)
  const [page, setPage] = useState(2)
  const [count, setCount] = useState(1)
  const [pokemons, setPokemons] = useState([]);

  const nav = useNavigate()
  useEffect(()=>{
    getPokemons()
  },[])

  const getPokemons = async () =>{
    try {
      let res = await axios.get('/api/pagepokemon/')
      setPokemons(res.data.pokemon)
      setCount(res.data.count)
    } catch (err) {
      console.log(err)
    }
  }

  const getMore = async () =>{
    try {
      let res = await axios.get(`/api/pagepokemon?page=${page}`)
      setPokemons((prevState)=>[...prevState, ...res.data.pokemon])
      setPage((prevState)=> prevState+1)

    } catch (err) {
      
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
    <InfiniteScroll
    dataLength={pokemons.length}
    next={()=>getMore()}
    hasMore={pokemons.length === count ? false : true}
    endMessage={
      <p style={{ textAlign: 'center' }}>
        <b>Yay! You have seen all the Pokemon</b>
      </p>
    }
    height={600}
    >
      <RenderDiv>
    <RenderPokemons pokemons={pokemons} deletePoke={deletePoke}/>
    </RenderDiv>
    </InfiniteScroll>
    </div>
  )

}


export default PokemonsInfi