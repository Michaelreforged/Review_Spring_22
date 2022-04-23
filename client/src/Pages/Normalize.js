import react, {useEffect, useState} from 'react'
import axios from 'axios'
import {Pokediv} from "../SyledComp/Divs"

const Normalize = () =>{
  const [normal, setNormal] = useState([])

  useEffect(()=>{
    getData()
  },[])

  const getData = async () =>{
    let res = await axios.get('/api/trainerpokemons')
    let formatted = format(res.data)
    const data = await Promise.all(formatted.map(async (t)=>{
      return await Promise.all(t.party.map(async (p) =>{
        return{
          ...p,
          info: await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${p.species.toLowerCase()}/`)
        }
      }))
    }))
    console.log(data)
    setNormal(format(res.data))
  }

  const format = (info) => {
    let trainerID = info.map((t)=>t.id)
    let uniqueTID = [...new Set(trainerID)] 
    uniqueTID.pop()
    return uniqueTID.map((t)=>{
      let pokemons = info.filter(p => p.id === t)
      let {id, name} = pokemons[0]
      let party = pokemons.map((p)=>{
        let species = p.species
        let name = p.pokemon_name
        return{species, name}
      })
      return {id,trainer:name, party}
    })
  }
 // data > trainer party  {species}

  const renderpoke = (party) =>{
    console.log(party[0].color)
    return party.map((poke)=>(
      <Pokediv key={Math.random()}>
        <p>{poke.species}</p>
        <p>{poke.name}</p>
        {/* <p>{poke.speciesinfo}</p> */}
      </Pokediv>
    ))
  }

  const render = () =>{
    return normal.map((t)=>(
      <div key={t.id}>
      <h1>{t.trainer}</h1>
      <div style={{display:'flex'}}>
      {renderpoke(t.party)}
      </div>
      </div>
    ))
  }


  return(
    <div>
      <p> Normalize</p>
      {render()}
    </div>
  )

}

export default Normalize