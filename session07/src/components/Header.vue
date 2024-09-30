<template>
    <div>
        <h1>K23</h1>
        <!-- <slot :item="data"></slot> -->
        <button @click="handleClick">click</button>
    </div>
</template>
<script setup>
const data = "K23_PTIT";
const emit = defineEmits(["messageSent"]);
const handleClick = () => {
    emit("messageSent", data);
};
</script>
<style lang=""></style>
