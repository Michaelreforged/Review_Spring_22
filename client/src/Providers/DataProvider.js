import React, { useEffect, useState } from "react";
import axios from 'axios'

export const DataContext = React.createContext();

const DataProvider = (props) => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(()=>{
    getPokemons()
  },[])

  const getPokemons = async()=>{
    try {
      let res = await axios.get('/api/pokemons')
      setPokemons(res.data)
    } catch(err){
      console.log(err.response.data)
    }
  }

  const pokemonProviderThing = {
    getPokemons,
    pokemons
};
  return (
    <DataContext.Provider value={pokemonProviderThing}>
      {props.children}
    </DataContext.Provider>
  );
};

export default DataProvider;