<script setup>
import Header from "./components/Header.vue";
const fullName = "Lê Ánh Linh";
const age = 25;
let count = 0;
const increase = () => {
    console.log("đã gọi hàm increase!");
};
</script>
<template>
    <div>
        <h1 class="content">xin chào {{ fullName }}</h1>
        <h2>số tuổi: {{ age }}</h2>
        <Header></Header>
        <button>click</button>
        <p class="text-3xl font-bold underline">Hello world!</p>
        <Teleport to="#root">
            <div id="redDiv">Hello!</div>
        </Teleport>
        <p>giá trị biến count: {{ count }}</p>
        <button @click="increase">click</button>
     
     
    </div>
</template>

<style scoped>
/* để CSS */
.content {
    color: red;
}
h1 {
    background-color: violet;
}
h2 {
    background-color: green;
}
#heading {
    color: red;
}

</style>
