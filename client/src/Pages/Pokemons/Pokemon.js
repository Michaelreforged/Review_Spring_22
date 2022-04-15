import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import LoadingIndicator from "../../Components/LoadingIndicator";
import { DataContext } from "../../Providers/DataProvider";
import {AuthContext} from "../../Providers/AuthProvider"
import axios from "axios";

const Pokemon = () => {
  const { pokemons, loading } = useContext(DataContext);
  const params = useParams();
  const [pokemon, setPokemon] = useState({});
  const nav = useNavigate()

  const capture = async () => {
    try {
      let res = await axios.put(`/api/addPoke/${params.id}`);
      console.log(res)
      nav("/pokemonspage")
    } catch (error) {
      console.log("cannot Catch")
    }
  };
  const { user } = useContext(AuthContext);

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
        <h1>{pokemon.name}</h1>
        {user && (
          <button
            onClick={() => {
              capture();
            }}
          >
            Capture
          </button>
        )}
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
