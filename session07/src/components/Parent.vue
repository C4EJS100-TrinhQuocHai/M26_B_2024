<template>
    <div>
        <h1>Parent11</h1>
        <template>
            <Child
                :propName="message"
                :age="age"
                :fullName="fullName"
            >
                <template #intro> <h2>học lập trình Vuejs</h2></template>
                <template #contact>
                    <h6>tìm hiểu về slots trong vuejs</h6></template
                >
                <h3>fđf</h3>
                <p>giá trị nhận về từ component con {{ item }}</p>
            </Child>
        </template>
    </div>
</template>
<script setup>
import { ref } from "vue";
import Child from "./Child.vue";
let message = ref("hello!");
let fullName = "Minh Thu";
let age = ref(20);
</script>
<style></style>
