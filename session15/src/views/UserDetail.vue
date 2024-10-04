<template>
    <div>
        trang thông tin chi tiết user
        <p>username:{{ findUserById() }}</p>
    </div>
</template>
<script setup>
// danh sách data của user
import { useRoute } from "vue-router";
const router = useRoute();
// destructoring
const { id } = router.params;
// console.log(11111, router.params.id);
let users = [
    {
        id: 1,
        name: "Minh Thu",
        age: 20,
    },
    {
        id: 2,
        name: "Hồng Vân",
        age: 21,
    },
];
// khai báo hàm
const findUserById = () => {
    return users.find((user) => user.id === +id).name;
};
</script>
<style lang=""></style>
