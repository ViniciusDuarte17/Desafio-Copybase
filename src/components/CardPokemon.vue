<template>
  <div class="cart">
    <header class="card-header">
      <p class="card-header-title">nome do pokemon</p>
    </header>
    <div class="card-image">
      <figure >
        <img
          src="https://i.pinimg.com/originals/f2/95/76/f295769d9bd3c34ffc552e837f5304ae.png"
          alt="pokemon"
        />
      </figure>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';


export default defineComponent( {
    name: 'CardPokemon'
})
</script>

<style>
img{
    display: flex;    
    align-items: center;
    width: 30%;
}

figure{
    display: flex;    
    align-items: center;
}

</style>