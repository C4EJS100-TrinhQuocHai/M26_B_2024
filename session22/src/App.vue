<template>
    <div>
        <h1>VUE API</h1>
        <ul>
            <li v-for="user in users" :key="user.id">
                {{ user.name }}
                <button @click="deleteUser(user.id)">delete</button>
                <button @click="updateUser(user.id)">cập nhật</button>
            </li>
        </ul>

        <button @click="addUser">thêm dữ liệu vào json-server</button>
    </div>
</template>
<script setup>
import { onMounted, ref } from "vue";
// khai báo hàm lấy dữ liệu từ json-server
const users = ref([]);
const getData = async () => {
    const response = await fetch("http://localhost:3000/users");
    const data = await response.json();
    console.log(111, data);
    users.value = data;
};
// getData();
onMounted(() => {
    getData();
});
// khai báo hàm thêm user
const addUser = async () => {
    const newUser = {
        name: " Thu Trang",
    };
    await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
    });
};
// hàm xóa user
const deleteUser = (id) => {
    // console.log("iddđ", id);
    fetch(`http://localhost:3000/users/${id}`, {
        method: "DELETE",
    });
    getData();
};
// hàm cập nhật  user
/* 
    PATCH: cập nhật từng trường (thuộc tính)
    PUT cập nhật hết các thuộc tính.
*/
const updateUser = (id) => {
    const updateUser = {
        name: "Thảo Phương",
        
    };
    fetch(`http://localhost:3000/users/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(updateUser),
    });
    getData();
};
</script>

<style></style>
