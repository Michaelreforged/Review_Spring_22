import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { DataContext } from "../../Providers/DataProvider";

const PokeForm = (props) => {
  const nav = useNavigate();
  const params = useParams();
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const { addPokemon, updatedPoke } = useContext(DataContext);

  const checkPoke = async () => {
    if (params.id) {
      try {
        let res = await axios.get(`/api/pokemons/${params.id}`);
        setName(res.data.name);
        setLocation(res.data.location);
      } catch (err) {
        console.log(err)
      }
    }
  };

  useEffect(() => {
    checkPoke();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (params.id) {
      try {
        await axios.put(`/api/pokemons/${params.id}`, { name, location });
        updatedPoke();
        nav(`/pokemons/${params.id}`);
      } catch (err) {
        console.log(err);
      }
    } else {
      try {
        await axios.post("/api/pokemons", { name, location });
        addPokemon({ name, location });
        nav("/pokemons/");
      } catch (err) {}
    }
  };
  console.log(name)
  const renderForm = () => {
    if (isNaN(params.id) && params['*'] !=='new') {
      return (
        <>
          <h1>Invalid ID</h1>
        </>
      );
    }
    return (
      <form onSubmit={handleSubmit}>
        <h1>{params.id ? "Update Pokemon" : "New Pokemon"}</h1>
        <p>Name</p>
        <input
          value={name}
          placeholder={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <br />
        <p>Location</p>
        <input
          value={location}
          placeholder={location}
          onChange={(e) => {
            setLocation(e.target.value);
          }}
        />
        <br />
        <button>{params.id ? "Update" : "Add"}</button>
      </form>
    );
  };

  return <>{renderForm()}</>;
};

export default PokeForm;
