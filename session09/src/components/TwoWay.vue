<template>
    <div>
        <input type="text" v-model="inputValue" />
        <p>giá trị inputValue : {{ inputValue }}</p>
        <button @click="handleClick">click</button>

        <ul>
            <p>type= checkbox!</p>
            my hobbies
            <li>
                <input type="checkbox" v-model="hobbies" value="đá bóng" />
                đá bóng
            </li>
            <li>
                <input type="checkbox" v-model="hobbies" value="cầu lông" />
                cầu lông
            </li>
            <li>
                <input type="checkbox" v-model="hobbies" value="code" />
                code
            </li>
        </ul>
        <p>giá trị các sở thích được chọn : {{ hobbies }}</p>

        <p>******</p>
        <ul>
            <p>type= radio!</p>

            <li>
                <input type="radio" v-model="gender" value="nam" />
                nam
            </li>
            <li>
                <input type="radio" v-model="gender" value="nữ" />
                nữ
            </li>
            <li>
                <input type="radio" v-model="gender" value="giới tính khác" />
                giới tính khác
            </li>
            <p>giá trị giới tính được chọn:{{ gender }}</p>
        </ul>
    </div>
</template>
<script setup>
import { ref, reactive } from "vue";
const inputValue = ref("rikkei");
const handleClick = () => {
    inputValue.value = "PTIT_K23";
};
const hobbies = ref([]);
const gender = ref("nữ");
</script>
<style></style>
