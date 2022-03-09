

export const renderPokemon = (pokemons) => {
    return pokemons.map((pokemon) => {
      return (
        <div key = {pokemon.id}>
          <h1>{pokemon.name}</h1>
          <p>{pokemon.location}</p>
        </div >
      );
    });
  };