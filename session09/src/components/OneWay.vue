<template>
    <div>
        <input type="text" :value="inputValue" />

        <button @click="handleClick">click</button>
    </div>
</template>
<script setup>
import { ref } from "vue";
const inputValue = ref("rikkei academy!");
const handleClick = () => {
    inputValue.value = "K23_PTIT";
};
</script>
<style></style>
