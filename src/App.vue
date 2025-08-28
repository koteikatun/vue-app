<script setup>
import { ref } from "vue";
import Button from "./components/Button.vue";
import Card from "./components/Card.vue";
import Headers from "./components/Headers.vue";

const cards = ref({
  numberCard: "01",
  word: "Fox",
  translation: "Лиса",
  state: "closed",
  status: "pending",
});

let score = ref(0);
</script>

<template>
  <div class="main">
    <Headers :score="score" />
    <div class="buttons">
      <Button />
    </div>
    <Card
      :number-card="cards.numberCard"
      :word="cards.word"
      :translation="cards.translation"
      :state="cards.state"
      :status="cards.status"
      @update:state="cards.state = $event"
      @update:status="cards.status = $event"
    />
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
