import { Link } from "react-router-dom"


const RenderPokemons = (pokemons) =>{

    return pokemons.map((pokemon)=>{
      return(
      <div key={pokemon.id}>
      <h1>{pokemon.name}</h1>
      <p>{pokemon.location}</p>
      <Link to={`/pokemons/${pokemon.id}`}>To Pokemon</Link>
      </div>
      )})
}

export default RenderPokemons