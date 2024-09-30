<template>
    <div>
        <h1>
            session 07
            <ul>
                <li>Props</li>
                <li>slots</li>
                <li>emit</li>
            </ul>
        </h1>
        <Parent></Parent>

        <Header @messageSent="handleMessage"> </Header>
    </div>
</template>
<script setup>
import Parent from "./components/Parent.vue";
import Header from "./components/Header.vue";
// hàm nhận giá trị từ component con;
const handleMessage = (data) => {
    console.log("giá trị nhận về", data);
    // vuex
};
</script>
<style></style>
