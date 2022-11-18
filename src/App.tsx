import { useEffect, useState } from "react";

// this interface is inside results. I need to get into results first
interface Pokemon {
  name:string;
  url:string;
}

function App() {

  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    const fetchPokemon = async () => {
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=151'"
      );
      const jsonBody= await response.json();
      setPokemons(jsonBody.results);
      console.log(jsonBody.results)
    };

    fetchPokemon();
  }, []);

  return (
    <>
      <h1>Pokemon App</h1>
      <p>{pokemons.map((eachPokemon)=> <li key = {eachPokemon.url}>{eachPokemon.name}</li>
      )}</p>
    </>
  );
}

export default App;
