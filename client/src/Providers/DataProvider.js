import React, { useEffect, useState } from "react";
import axios from "axios";

export const DataContext = React.createContext();

const DataProvider = (props) => {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(null);

  useEffect(() => {
    console.log("mounted");
    getPokemons();
  }, []);

  const getPokemons = async () => {
    setLoading(true);

    try {
      let res = await axios.get("/api/pokemons");
      console.log(res);
      setPokemons(res.data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const addPokemon = async(poke) =>{
    setPokemons([...pokemons, poke])
  }

  const providerItems = {
    getPokemons,
    pokemons,
    loading,
    addPokemon,
    setPokemons
  };

  return (
    <DataContext.Provider value={providerItems}>
      {props.children}
    </DataContext.Provider>
  );
};

export default DataProvider;
