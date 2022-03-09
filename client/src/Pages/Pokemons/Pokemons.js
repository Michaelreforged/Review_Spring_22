import React, { useEffect, useState } from "react";
import axios from "axios";
import {renderPokemon} from "./RenderPokemons"

const Pokemons = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    getPokemons();
  }, []);

  const getPokemons = async () => {
    try {
      let res = await axios.get("/api/pokemons");
      setPokemons(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h1>Pokemons</h1>
      {renderPokemon(pokemons)}
    </div>
  );
};

export default Pokemons;
