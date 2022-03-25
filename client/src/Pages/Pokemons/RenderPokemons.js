import { Link } from "react-router-dom"
import { Pokediv, styledLink } from "../../SyledComp/Divs"


const RenderPokemons = ({pokemons,deletePoke}) =>{

    return pokemons.map((pokemon)=>{
      return(
      <Pokediv key={pokemon.id}>
        <div>
          <h1>{pokemon.name}</h1>
          <p>{pokemon.location}</p>
        </div>
        <div>
          <styledLink style={{textDecoration:"none"}} to={`/pokemons/${pokemon.id}`}>To Pokemon</styledLink>
          <styledLink style={{textDecoration:"none"}} to={`/pokemons/${pokemon.id}/edit`}>Update Pokemon</styledLink>
          <button onClick={()=>{deletePoke(pokemon.id)}}>Delete Pokemon</button>
        </div>
      </Pokediv>
      )})
}

export default RenderPokemons