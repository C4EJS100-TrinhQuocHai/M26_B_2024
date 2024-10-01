<template>
    <div>
        <h1>session09 : data binding!</h1>
        <p>1.One-way Data Binding</p>
        <p>hiển thị giá trị count: {{ count }}</p>
        <button @click="handleClick">click</button>
        <p>**************</p>
        <one-way></one-way>
        <p>******</p>
        <two-way></two-way>
    </div>
</template>
<script setup>
import { ref } from "vue";
import OneWay from "./components/OneWay.vue";
import TwoWay from "./components/TwoWay.vue";

const count = ref(0);
const handleClick = () => {
    count.value++;
};
console.log("component re-render");
</script>
<style></style>
