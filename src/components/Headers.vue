<script setup>
import Score from "./Score.vue";

const props = defineProps({
  score: {
    type: Number,
    default: 100,
  },
});
</script>

<template>
  <div class="headers">
    <div class="headers-title">ЗАПОМНИ СЛОВО</div>
    <Score :number="props.score" />
  </div>
</template>

<style scoped>
.headers {
  display: flex;
  justify-content: space-between;
}

.headers-title {
  padding-top: 49px;
  padding-left: 66px;
  font-family: var(--font);
  font-weight: 700;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: 0.12em;
  color: var(--color-font);
}
</style>
