<template>
  <div class="cart">
    <header class="card-header">
      <p class="card-header-title">{{ pokemons.name }}</p>
    </header>
    <div class="card-image">
      <figure >
        <img
          :src="pokemons.url"
          alt="pokemon"
        />
      </figure>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { IPokemon } from '../interface/IPokemon';


export default defineComponent( {
    name: 'CardPokemon',

    props: {
      pokemons: {
            type: Object as PropType<IPokemon>,
            required: true
        }
    },
    })
   
</script>

<style>
img{
    width: 16%;
}

figure{
    display: flex;    
    align-items: center;
    justify-content: center;
}

</style>