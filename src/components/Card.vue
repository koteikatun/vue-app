<script setup>
import { defineProps, defineEmits } from "vue";
import Fail from "../icons/Fail.vue";
import Success from "../icons/Success.vue";

const props = defineProps({
  numberCard: {
    type: String,
  },
  word: {
    type: String,
  },
  translation: {
    type: String,
  },
  state: {
    type: String,
  },
  status: {
    type: String,
  },
});
const emit = defineEmits(["update:status", "update:state"]);

function openedCard() {
  emit("update:state", "opened");
}

function successButton() {
  emit("update:status", "success");
}

function failButton() {
  emit("update:status", "fail");
}
</script>
<template>
  <div class="card-container">
    <div class="card-number">{{ props.numberCard }}</div>
    <div class="border-card">
      <div v-if="props.state === 'closed'">
        <div class="card-content">{{ props.word }}</div>
        <button class="flip-button" @click="openedCard">ПЕРЕВЕРНУТЬ</button>
      </div>
      <div v-else>
        <div v-if="props.status === 'success'" class="icons-result">
          <Success :width="39" :height="39" />
        </div>
        <div v-else-if="props.status === 'fail'" class="icons-result">
          <Fail :width="39" :height="39" />
        </div>
        <div class="card-content">{{ props.translation }}</div>
        <div class="icons-variable">
          <Fail class="button-result" @click="failButton" />
          <Success class="button-result" @click="successButton" />
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.card-container {
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

.icons-result {
  position: absolute;
  top: 9px;
  left: 105px;
  width: 39px;
  height: 39px;
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
  left: 80px;
  font-family: var(--font);
  font-weight: 700;
  font-size: 12px;
  line-height: 150%;
  letter-spacing: 0.12em;
  color: var(--color-font);
  cursor: pointer;
}

.icons-variable {
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: 19px;
  left: 80px;
  gap: 32px;
  background: var(--color-primary);
  width: 97px;
  height: 18px;
}

.button-result {
  cursor: pointer;
}
</style>
