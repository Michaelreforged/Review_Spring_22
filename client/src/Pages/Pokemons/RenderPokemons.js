import { Link } from "react-router-dom"
import { Pokediv, StyledLink } from "../../SyledComp/Divs"


const RenderPokemons = ({pokemons,deletePoke}) =>{

    return pokemons.map((pokemon)=>{
      return(
      <Pokediv key={pokemon.id}>
        <div>
          <h1>{pokemon.name}</h1>
          <p>{pokemon.location}</p>
        </div>
        <div>
          <StyledLink to={`/pokemons/${pokemon.id}`}>To Pokemon</StyledLink>
          <StyledLink to={`/pokemons/${pokemon.id}/edit`}>Update Pokemon</StyledLink>
          <button onClick={()=>{deletePoke(pokemon.id)}}>Delete Pokemon</button>
        </div>
      </Pokediv>
      )})
}

export default RenderPokemons