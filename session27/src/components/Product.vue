<template>
    <div>
        <p>******</p>
        <button @click="add">thêm sản phẩm!</button>
        <h1>danh sách sản phẩm!</h1>
        <ul>
            <li v-for="pro in store.state.product.products" :key="pro.id">
                {{ pro.name }}
            </li>
        </ul>
    </div>
</template>
<script setup>
// import { addProduct } from "@/api/productApi";
import { useStore } from "vuex";
const store = useStore();
// muốn kích hoạt action thì phải bắt dispatch
store.dispatch("getAllProduct");
console.log("giá trị của store", store);

const add = () => {
    store.dispatch("addProductAction", {
        data: {
            name: "iphone!",
        },
    });
    // store.dispatch("getAllProduct");
};
</script>
<style lang=""></style>
