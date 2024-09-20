<template>
    <div>
        <h1>Ref, Reactive, computed, watcher</h1>
        <p>Ref</p>
        <p>giá trị biến count : {{ count }}</p>
        <ul>
            <li>name: {{ userInfor.name }}</li>
            <li>address: {{ userInfor.address }}</li>
        </ul>
        <button @click="increase">click</button>
        <button @click="changeInfo">change info</button>
        <button>giá trị lọc : {{ test(count, 2) }}</button>

        <p>*****************</p>
        <p>Reactive</p>
        <p>******************</p>
        <p>computed</p>
        <p>giá trị biến count khi X2: {{ numberCount }}</p>
        <p>giá trị biến count khi bình phương: {{ calulator }}</p>
        <button @click="handleCLick">handleCLick</button>
        <p>************************</p>
        <p>watcher</p>
        <button @click="handleIncreae">increase</button>
    </div>
</template>

<script setup>
import { ref, reactive, computed, watch } from "vue";
const count = ref([1, 2, 3, 4]); //{value:0}
const numberCount = ref(5);
const number = ref(1);
const userInfor = ref({
    id: 1,
    name: "hồng",
    address: "Hà Đông",
});
console.log("count", count);

const increase = () => {
    // count.value=count.value + 1
    // count.value = 5;
};
const changeInfo = () => {
    userInfor.value.address = "Trần Phú";
    userInfor.value.name = "Thùy Linh";
};

const test = (arr, id) => {
    let result = arr.filter((item) => item == id);
    return result;
};
const user = reactive({
    fullName: " Nguyễn Hồng Nhung",
    age: 25,
    address: "Hà Nội",
});
const calulator = computed(() => numberCount.value ** 2);
const handleCLick = () => {
    numberCount.value *= 2;
};
watch(number, (newValue, OldValue) => {
    // thường đi xử lý call API 
    console.log("watch được gọi!");
    console.log("giá trị OldValue", OldValue);
    console.log("giá trị newValue", newValue);
});
const handleIncreae = () => {
    number.value++;
};
</script>
<style></style>
