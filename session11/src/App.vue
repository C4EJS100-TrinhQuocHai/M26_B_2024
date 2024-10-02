<template>
    <div>
        <h1>lifecycle!</h1>

        <!-- 
            React :
            1. khởi tạo create : khởi tạo state, props
            2. mount  : gắt kết đưa vào DOM
            3. update : quá trình cập nhật thay đổi state (re-render)
            4. unmount : loại bỏ khỏi DOM 
            Vuejs cũng tương tự gồm 4 giai đoạn
            khởi tạo-gắn kết- cập nhật- loại bỏ.

         -->
        <Lifecycle :count="countA" v-if="isShow"></Lifecycle>
        <button @click="handleClick">click</button>
        <button @click="unmountComponent">click-unmount</button>
    </div>
</template>
<script setup>
import { ref } from "vue";
import Lifecycle from "./components/Lifecycle.vue";
const isShow = ref(true);
const countA = ref(0);
const handleClick = () => {
    countA.value++;
};
const unmountComponent = () => {
    isShow.value = false;
};
</script>
<style></style>
