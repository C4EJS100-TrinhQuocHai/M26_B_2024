<template>
    <div>
        <h1>header</h1>
        <p>giá trị count: {{ store.state.count.count }}</p>

        <button @click="handleClick">increase</button>
    </div>
</template>
<script setup>
import { useStore } from "vuex";
const store = useStore();
// console.log("giá trị store", store);
//
const handleClick = () => {
    store.commit("increase", {
        payload: 5,
    });
};
</script>
<style lang=""></style>
