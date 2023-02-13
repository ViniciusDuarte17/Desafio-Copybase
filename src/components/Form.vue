<template>
  <div class="box">
    <div class="columns">
      <div
        class="column is-8"
        role="form"
        aria-label="area de pesquisa da pokemon"
      >
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Button from "./Button.vue";

export default defineComponent({
  name: "Form",
  
  emits: ["aoPesquisarPokemon"],
  data() {
    return {
      nomePokemon: ''
    }
  },
  components: {Button},

});
</script>
