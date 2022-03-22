import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LoadingIndicator from "../../Components/LoadingIndicator";
import { DataContext } from "../../Providers/DataProvider";

const Pokemon = () => {
  const { pokemons, loading } = useContext(DataContext);
  const params = useParams();
  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    if (loading === false) {
      const p = pokemons.filter((p) => {
        return p.id === parseInt(params.id);
      });
      setPokemon(p[0]);
    }
  }, [loading]);
  
  const render = () => {
    if (isNaN(params.id) || pokemon === undefined) {
      return (
        <>
          <h1>Invalid ID</h1>
        </>
      );
    }
    return (
      <>
        <h1>{pokemon?pokemon.name:""}</h1>
      </>
    );
  };

  return (
    <>
      <h1>Pokemon</h1>
      {!loading ? render() : LoadingIndicator()}
    </>
  );
};

export default Pokemon;
