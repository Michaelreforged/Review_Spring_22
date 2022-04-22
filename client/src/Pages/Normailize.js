import axios from "axios"
import { useEffect, useState } from "react"
import {Pokediv} from "../SyledComp/Divs"
const Normalize = () => {
  const [data, setData] = useState([])
  const [normal, setNormal] = useState([])

  useEffect(()=>{
    getData()
  },[])



  const getData = async () =>{
    let res = await axios.get("/api/trainerpoke")
    setData(res.data)
    setNormal(format(res.data))
  }

  const format = (data) =>{
    let trainerID = data.map((t)=>t.id)
    let uniqueTrainer = [...new Set(trainerID)]
    return uniqueTrainer.map((t)=>{
      let pokemons = data.filter(p => p.id === t)
      let {name} = pokemons[0]
      let party = pokemons.map((p)=>{
        let species = p.species
        let name = p.pokemon_name
        return {species,name}
      })
      return {trainer:name, party}
    })
  }

  const rendeDataPretty = () => {
    return data.map((d)=>(
      <>
      {JSON.stringify(d, null,'\t')}
      <br/>
      </>
    ))
  }
  const renderNormalPretty = () => {    
    return normal.map((d)=>(
      <>
      {JSON.stringify(d, null, '\t')}
      <br/>
      </>
    ))
  }

  const renderPoke = (party) =>{
    return party.map((poke)=>{
      if(poke.species != null){
        return(
          <Pokediv>
            <p>{poke.name}</p>
            <p>{poke.species}</p>
          </Pokediv>
        )
      }
    })
  }

  const render = () =>{
    return normal.map((t)=>(
      <div>
        <h2>{t.trainer}</h2>
        <div style={{display:"flex"}}>
        {renderPoke(t.party)}
        </div>
      </div>
    ))
  }

  return(
    <>
    <h1> Normalize </h1>
    {render()}
    {rendeDataPretty()}
    {renderNormalPretty()}

    </>
  )

}

export default Normalize