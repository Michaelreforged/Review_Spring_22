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
    // let formatted = format(res.data)
    // const data = await Promise.all(formatted.map(async(t)=>{
    //   let party = await Promise.all(t.party.map( async (p)=>{
    //     return{
    //       ...p,
    //       info: await getSpeciesInfo(p.species.toLowerCase())
    //     }
    //   }))
    //   return {...t, party}
    // }))
    // console.log(data)
    let data = await Promise.all(res.data.map(async (poke)=>{
      return getSpeciesInfo(poke.species.toLowerCase())
    }))
    let newData = res.data.map((poke, ind)=>{
      return{...poke, infe:data[ind]}
    })    
    console.log(format(newData))
    setNormal(format(newData))
  }



  const getSpeciesInfo = async (species) =>{
    let res = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${species}/`)
    return {color: res.data.color.name, evolution:res.data.evolves_from_species}
  }

  const format = (info) => {
    let trainerID = info.map((t)=>t.id)
    let uniqueTID = [...new Set(trainerID)] 
    return uniqueTID.map((t)=>{
      let pokemons = info.filter(p => p.id === t)
      let {id, name} = pokemons[0]
      let party = pokemons.map((p)=>{
        let species = p.species
        let name = p.pokemon_name
        let data = p.infe
        console.log(p)
        return{species, name,info:data}
      })
      return {id,trainer:name, party}
    })
  }
 // data > trainer party  {species}

  const renderpoke = (party) =>{
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