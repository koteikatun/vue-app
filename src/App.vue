<script setup>
import { ref } from "vue";
import Button from "./components/Button.vue";
import Card from "./components/Card.vue";
import Headers from "./components/Headers.vue";

const cards = ref([
  { word: "Fox", translation: "Лиса", state: "closed", status: "pending" },
]);

let score = ref(0);
</script>

<template>
  <div class="main">
    <Headers :score="score" />
    <div class="buttons">
      <Button />
    </div>
    <Card v-bind="cards" @click="score++" />
  </div>
</template>

<style scoped>
.main {
  height: 100vh;
}
.buttons {
  display: flex;
  justify-content: center;
}
</style>
