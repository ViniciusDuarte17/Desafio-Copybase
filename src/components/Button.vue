<template>
    <div
          class="is-flex is-align-items-center is-justify-content-space-between"
        >
          <button class="button">
            <span class="icon">
              <i class="fas fa-play"></i>
            </span>
            <span>Pesquisar</span>
          </button>
        </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';


export default defineComponent( {
    name: 'Button'
})
</script>