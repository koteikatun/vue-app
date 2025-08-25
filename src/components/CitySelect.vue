<script setup>
import { ref } from "vue";
import Button from "./Button.vue";
import IconLocation from "../icons/IconLocation.vue";

const emit = defineEmits({
  selectCity(payload) {
    return payload;
  },
});

let isEditted = ref(false);

function select() {
  isEditted.value = false;
  emit("selectCity", "London");
}

function edit() {
  isEditted.value = true;
}
</script>
<template>
  <Button @click="edit()">
    <IconLocation />
    Изменить город
  </Button>
  <input />
  <Button @click="select()"> Сохранить </Button>
</template>

<style scoped></style>
