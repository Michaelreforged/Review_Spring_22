import { Link } from "react-router-dom"


const RenderPokemons = ({pokemons,deletePoke}) =>{

    return pokemons.map((pokemon)=>{
      return(
      <div key={pokemon.id}>
      <h1>{pokemon.name}</h1>
      <p>{pokemon.location}</p>
      <Link to={`/pokemons/${pokemon.id}`}>To Pokemon</Link>
      <Link to={`/pokemons/${pokemon.id}/edit`}>Update Pokemon</Link>
      <button onClick={()=>{deletePoke(pokemon.id)}}>Delete Pokemon</button>
      </div>
      )})
}

export default RenderPokemons