import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const PokeForm = (props) => {
  const params = useParams();
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const nav = useNavigate()

  const checkPoke = async () => {
    if (params.id) {
      try {
        let res = await axios.get(`/api/pokemons/${params.id}`);
        setName(res.data.name)
        setLocation(res.data.location)
      } catch (err) {
        console.log(err);
      }
    }
  };

  useEffect(() => {
    checkPoke();
  }, []);

  const handleSubmit = async (e) => {
    if (params.id) {
      e.preventDefault();
      if (props) {
        try {
          let res = await axios.put(`/api/pokemons/${params.id}`, {
            name,
            location,
          });
          console.log(res);
          nav(`/pokemons/${params.id}`)
        } catch (err) {
          console.log(err);
        }
      }
    } else {
      e.preventDefault();
      if (props) {
        try {
          await axios.post("/api/pokemons", { name, location });
            nav(`/pokemons/`)
        } catch (err) {
          console.log(err);
        }
      }
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>{params.id ? "Edit Pokemon" : `New Pokemon`}</h1>
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
          onChange={(e) => {
            setLocation(e.target.value);
          }}
        />
        <br />
        <button>Add</button>
      </form>
    </div>
  );
};

export default PokeForm;
