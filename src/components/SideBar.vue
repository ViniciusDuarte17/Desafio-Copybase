<template>
    <main>
        <header>
            <img src="../assets/Logo.png" alt="Logo da pokedex">
        </header>
    </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';


export default defineComponent( {
    name: 'SideBar'
})

</script>

<style scoped>
header {
    padding: 1rem;
    background:#ff9c18 ;
    width: 100%;
    height: 100vh;
}

img {
    width: 70%;
}

@media only screen and (max-width: 768px) {
    header {
        padding: 2.5rem;
        height: auto;
    }
}
</style>