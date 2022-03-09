import React, { useEffect, useState } from "react";
import axios from 'axios'

export const DataContext = React.createContext();

const DataProvider = (props) => {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(()=>{
    getPokemons()
  },[])

  const getPokemons = async ()=>{
    setLoading(true)
    // setTimeout(async () => {
      try {
        let res = await axios.get('/api/pokemons')
        console.log(res.data)
        setPokemons(res.data)
      } catch(err){
        console.log(err.response.data)
      } finally{
        setLoading(false)
      }
    // }, 1000);
  }

  const providerItems = {
    getPokemons,
    pokemons,
    loading,
};
  return (
    <DataContext.Provider value={providerItems}>
      {props.children}
    </DataContext.Provider>
  );
};

export default DataProvider;