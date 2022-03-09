import React, { useContext } from "react";
import {renderPokemon} from "./RenderPokemons"
import { DataContext } from "../../Providers/DataProvider";
import LoadingIndicator from "../../Components/LoadingIndicator";

const Pokemons2 = () => {

  const {pokemons, loading} = useContext(DataContext)

  return (
    <div>
      <h1>Pokemons</h1>
      {loading ? LoadingIndicator() : renderPokemon(pokemons)}
    </div>
  );
};

export default Pokemons2;