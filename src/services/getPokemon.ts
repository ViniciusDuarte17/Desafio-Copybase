import axios from "axios";

export const getPokemon = (name: string, pokemon: any) => {
  axios
    .get(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .then((res) => {
      const poke = {
        name: res.data.name,
        url: res.data.sprites.other.dream_world.front_default
      }
      pokemon.push(poke);
      
    })
    .catch((error) => {
      alert(error.response.data);
    });
};

