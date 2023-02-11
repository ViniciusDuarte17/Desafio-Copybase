<template>
  <main class="columns is-gapless is-multiline">
    <div class="column is-one-quarter">
      <SideBar />
    </div>
    <div class="column is-three-quarter">
      <!-- <Form /> -->
      <div class="box">
    <div class="columns">
      <div
        class="column is-8"
        role="form"
        aria-label="area de pesquisa da pokemon"
      >
        <input
          type="text"
          class="input"
          placeholder="Pesquise seu pokemon preferido"
          v-model="nomePokemon"
          
        />
        <input
          type="submit"
          placeholder="Pesquise seu pokemon preferido"
          v-on:click="searchPokemon"
          value="Enviar"
          
        />
      </div>
      <!-- <div class="column">
        <Button @some-event="searchPokemon" />
      </div> -->
    </div>
  </div>

      <div class="list">
        <CardPokemon />
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SideBar from "./components/SideBar.vue";
import Form from "./components/Form.vue";
import CardPokemon from "./components/CardPokemon.vue";
import { getPokemon } from "./services/getPokemon";
import Button from "./components/Button.vue";

export default defineComponent({
  name: "App",
  emits: ['aoPesquisarPokemon'],
  data() {
    return {
      nameReal: '',
      nomePokemon: ''
    }
  },
  
  components: {
    SideBar,
    Form,
    CardPokemon,
    Button
  },
  
  methods: {
    searchPokemon(e: any) {
      e.preventDefault()
     this.$emit('aoPesquisarPokemon', {
      descricao: this.nomePokemon
     }) 
     this.nameReal = this.nomePokemon
     this.nomePokemon = '';
    }
  },
  mounted() {
      getPokemon(this.nameReal)
  }
})


</script>

<style>
.list {
  padding: 1.25rem;
}
</style>
