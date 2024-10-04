<template>
    <div>
        <h1>vue-router</h1>
        <!-- <RouterView></RouterView> -->
        <router-link to="/">click home</router-link>
        <router-link to="/about">click about</router-link>
        <router-link to="/contact">click contact</router-link>

        <button @click="redirectPage">redirect</button>

        <!-- <a href="/">click home</a>||
         <a href="/about">click about</a>||
         <a href="/contact">click contact</a> -->
        <router-view></router-view>
    </div>
</template>
<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
// khai báo  hàm điều hướng sang các trang
const redirectPage = () => {
    // router.push("/contact");
    router.replace("/contact");
};
</script>
<style></style>
