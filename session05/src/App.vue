<template>
    <div>
        <h1>condition & list rendering!</h1>
        <ul>
            <li>V-IF</li>
            <li>V-ELSE</li>
            <li>V-ELSE-IF</li>
            <li>V-SHOW</li>
        </ul>
        <p>V-IF</p>
        <p v-if="isCheck">hiển thị v-if nếu điều kiện thỏa mãn!</p>
        <p v-if="isCheck">hiển thị v-if nếu điều kiện thỏa mãn!</p>
        <p v-else>hiển thị v-else</p>
        <p>***********</p>
        <p>V-SHOW</p>
        <p v-show="isVShow">
            element được hiển thị nếu điều kiện v-show thỏa mãn!
        </p>
        <p>*************************</p>
        <p>rendering!</p>
        <ul>
            <li v-for="(std, index) in students" :key="std.id">
                sinh viên số {{ index + 1 }}:{{ std.name }}
            </li>
        </ul>
        <ul>
            <li v-for="(value, key, index) in useInfo" :key="value.id">
                {{ key }} - {{ value }} {{ index }}
            </li>
        </ul>
    </div>
</template>
<script setup>
const isCheck = false;
const isVShow = false;
const students = [
    {
        id: 1,
        name: "Phương Thảo",
    },
    {
        id: 2,
        name: "Minh Đức",
    },
    {
        id: 3,
        name: "Phi Hùng",
    },
];
const useInfo = {
    id: 1,
    name: "Nguyễn Văn A",
    age: 20,
    address: "Hà Nội",
};
</script>
<style></style>
