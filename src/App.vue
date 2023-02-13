<template>
  <main class="columns is-gapless is-multiline">
    <div class="column is-one-quarter">
      <SideBar />
    </div>
    <div class="column is-three-quarter">
      <Form>
        <input
          type="text"
          class="input"
          placeholder="Pesquise seu pokemon preferido"
          v-model="nomePokemon"
        />
        <div class="column">
          <Button @aoPesquisarPokemon="searchPokemon" />
        </div>
      </Form>
      <div class="list">
        <CardPokemon
          v-for="(pokem, index) in pokemon"
          :key="index"
          :pokemons="pokem"
        />
        <Box v-if="listPokemonEmpty">
          Você ainda não buscou por nenhum pokemon :( 
        </Box>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SideBar from "./components/SideBar.vue";
import Form from "./components/Form.vue";
import CardPokemon from "./components/CardPokemon.vue";
import Button from "./components/Button.vue";
import { getPokemon } from "./services/getPokemon";
import Box from './components/Box.vue';


export default defineComponent({
  name: "App",
  emits: ["aoPesquisarPokemon"],

  data() {
    return {
      nomePokemon: "",
      pokemon: [],
    };
  },
  computed: {
    listPokemonEmpty() {
      return this.pokemon.length === 0
   }
  },
  components: {
    SideBar,
    Form,
    CardPokemon,
    Button,
    Box
  },


  methods: {
    searchPokemon() {
      this.$emit("aoPesquisarPokemon", {
        name: this.nomePokemon,
      });

     getPokemon(this.nomePokemon, this.pokemon);
     
      this.nomePokemon = "";
    },
  },
});
</script>

<style>
.list {
  padding: 1.25rem;
}
</style>
