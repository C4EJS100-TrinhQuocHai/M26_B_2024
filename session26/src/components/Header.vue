<template>
    <div>
        <h1>header</h1>
        <p>giá trị của count: {{ store.state.count }}</p>
        <button @click="increase">increase</button>
        <button @click="handleClick">increase affter 1 s</button>
        <p>count lấy theo getters: {{ store.getters.getCount }}</p>

        <ul>
            <li v-for="todo in store.state.todos" :key="todo.id">
                {{ todo.name }}
            </li>
        </ul>
        <ul>
            <li v-for="user in store.state.users" :key="user.id">
                {{ user.name }}
                <button @click="deleteUser(user.id)">delete</button>
            </li>
        </ul>

        <button @click="getDoneTodo">
            lấy ra các công việc đã hoàn thành!
        </button>
    </div>
</template>
<script setup>
import { useStore } from "vuex";
const store = useStore();
console.log(" giá trị của store :", store);

const getDoneTodo = () => {
    console.log("các công việc đã hoàn thành", store.getters.doneTodos);
};
// hàm tăng count
const increase = () => {
    store.commit("increment1", {
        amount: 5,
    });
};
const handleClick = () => {
    store.dispatch("incrementAsync1");
};
const deleteUser = async (id) => {
   await store.dispatch("deleteUser", {
        id,
    });
   store.dispatch("incrementAsync1");
};
</script>
<style lang=""></style>
