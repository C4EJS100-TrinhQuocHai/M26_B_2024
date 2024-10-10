<template>
    <div>
        <h1>API+axios</h1>
        <ul>
            <li v-for="user in users" :key="user.id">
                {{ user.name }}
                <button @click="deleteUser(user.id)">xóa</button>
                <button @click="updateUser(user.id)">cập nhật</button>
            </li>
        </ul>

        <button @click="addUser">thêm user</button>
        <select @change="handleChange">
            <option value="asc">A-Z</option>
            <option value="desc">Z-A</option>
        </select>

        <input type="text" v-model="valueInput" />
        <button @click="findByNameUser">tìm kiếm</button>
    </div>
</template>

<script setup>
import axios from "axios";
import { onMounted, ref } from "vue";
const users = ref([]);
const valueInput = ref("");
// hàm lấy tất cả users
const getUsers = async () => {
    let res = await axios.get("http://localhost:3000/users");
    console.log("tất cả user", res.data);
    users.value = res.data;
};
//
onMounted(() => {
    getUsers();
});
const addUser = () => {
    let newUser = {
        name: "Hiệp Gà",
        address: "Hà Nội",
    };
    axios.post("http://localhost:3000/users", newUser);
    getUsers();
};
// hàm xóa user
const deleteUser = (id) => {
    // console.log("id user", id);
    axios.delete(`http://localhost:3000/users/${id}`);
    getUsers();
};
// hàm cập nhật user
const updateUser = (id) => {
    console.log("id user", id);
    const updateUser = {
        name: "Hiệp Đen",
    };
    // 2 phương thức cập nhật PUT,PATCH
    axios.put(`http://localhost:3000/users/${id}`, updateUser);
    getUsers();
};
//
const handleChange = async (event) => {
    console.log("giá trị chọn", event.target.value);
    // viết api sắp xếp users
    let response = await axios.get(
        `http://localhost:3000/users?_sort=name&_order=${event.target.value}`
    );
    // getUser();
    users.value = response.data;
    // console.log(11111, response);
};
// hàm tìm kiếm
const findByNameUser = async () => {
    console.log("giá trị ô input", valueInput);
    // API tìm kiếm
    const res = await axios.get(
        `http://localhost:3000/users?name_like=${valueInput.value}`
    );
    console.log("kết quả tìm kiếm là", res);
    users.value = res.data;
};
</script>
<style></style>
