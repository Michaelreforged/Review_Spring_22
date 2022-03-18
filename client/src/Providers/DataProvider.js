import React, { useEffect, useState } from "react";
import axios from "axios";

export const DataContext = React.createContext();

const DataProvider = (props) =>{
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(null)
  const [updated, setUpdated] = useState(false)

  useEffect(()=>{
    console.log('mounted')
    getPokemons()
    setUpdated(false)
  },[updated])

  const getPokemons = async () => {
    setLoading(true)
      
      try {
        let res = await axios.get('/api/pokemons')
        console.log(res)
        setPokemons(res.data)
      } catch (err) {
        console.log(err)
      }finally{

          setLoading(false)
      }
  }

  const addPokemon = (poke) =>{
    console.log("added new Pokemon")
    setPokemons([...pokemons, poke])
    setUpdated(true)
  }
  const updatedPoke = () =>{
    console.log("Update Pokemon")
    setUpdated(true)
  }

  const providerItems = {
    getPokemons,
    pokemons,
    loading,
    addPokemon,
    updatedPoke,
    setPokemons,
  }

  return(
    <DataContext.Provider value = {providerItems}>
      {props.children}
    </DataContext.Provider>
  )

}

export default DataProvider