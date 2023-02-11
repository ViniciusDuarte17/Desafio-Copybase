import axios from "axios";

export const getPokemon = (name: string) => {
console.log(name)
   axios
  .get(`https://pokeapi.co/api/v2/pokemon/${name}`)
  .then((res) => {
          console.log(res.data)
  })
  .catch((error) => {
          console.log(error);
  });
}