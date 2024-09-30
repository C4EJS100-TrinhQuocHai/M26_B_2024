<template>
    <div>
        <h1>Child</h1>
        <p>giá trị nhận về từ component cha : {{ props.propName }}</p>
        <p>Tên đầy đủ : {{ props.fullName }}</p>
        <!-- <slot></slot> -->
        <p>tuổi : {{ props.age }}</p>

        <p>nơi hiển slot của học lập trình vuejs</p>
        <slot name="intro"></slot>
        <p>nơi hiển slot của phần tìm hiểu slot</p>
        <slot name="contact"></slot>
    </div>
</template>
<script setup>
// const props = defineProps({ propName:"",age:"" });
const props = defineProps(["propName", "doan"]);

const data = "k23_ptit";
console.log("giá trị của props", props);
</script>
<style></style>
