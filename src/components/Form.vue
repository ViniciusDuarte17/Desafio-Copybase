<template>
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
        />
      </div>
      <div class="column">
        <Button />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Button from "./Button.vue";

export default defineComponent({
  name: "Form",

  components: {Button}
});
</script>
