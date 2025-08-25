<script setup>
const props = defineProps({
  numberCard: {
    type: String,
  },
  contentCard: {
    type: String,
  },
});

const emit = defineEmits({
  viewTranslate(payload) {
    return payload;
  },
});

function viewTranslate() {
  emit("viewTranslate", true);
}
</script>
<template>
  <div class="card">
    <div class="card-number">{{ props.numberCard }}</div>
    <div class="border-card">
      <div class="card-content">{{ props.contentCard }}</div>
    </div>
    <button class="flip-button" @click="viewTranslate()">ПЕРЕВЕРНУТЬ</button>
  </div>
</template>
<style scoped>
.card {
  border-radius: 16px;
  width: 250px;
  height: 376px;
  box-shadow: 0 0 16px 0 rgba(0, 0, 0, 0.1);
  background: var(--color-primary);
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.border-card {
  border: 1px solid #cce8ff;
  border-radius: 12px;
  width: 212px;
  height: 320px;
  margin: 28px 19px;
}
.card-number {
  position: absolute;
  top: 20px;
  left: 35px;
  font-size: 14px;
  font-family: var(--font);
  font-weight: 400;
  color: var(--color-card);
  background: var(--color-primary);
}

.card-content {
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 18px;
  text-align: center;
  color: var(--color-card);
  align-items: center;
  width: 180px;
  height: 21px;
  margin: 149px 16px;
}

.flip-button {
  border: none;
  width: 97px;
  height: 18px;
  background: var(--color-primary);
  position: absolute;
  bottom: 19px;
  font-family: var(--font);
  font-weight: 700;
  font-size: 12px;
  line-height: 150%;
  letter-spacing: 0.12em;
  color: var(--color-font);
  cursor: pointer;
}
</style>
