<template>
    <div>
        <h1>component lifecycle</h1>
        <p>{{ sayHello() }}</p>
        <ul>
            <li>countC:{{ countC }}</li>
            <li>countD:{{ countD }}</li>
        </ul>
        <button @click="handleChange">changeCount</button>
        <p>hàm tính toán bình thường {{ caculatorC() }}</p>
        <p>hàm dùng computed {{ caculatorD }}</p>
    </div>
</template>
<script setup>
import {
    onBeforeMount,
    onMounted,
    onBeforeUpdate,
    onUpdated,
    onUnmounted,
    onBeforeUnmount,
    ref,
    computed,
} from "vue";
const props = defineProps(["count"]);
// console.log("11111", props);
const countC = ref(0);
const countD = ref(0);

onMounted(() => {
    console.log("hook onMounted được gọi!");
    // nơi gọi API lấy data dữ liệu gắn vào DOM
});
const sayHello = () => {
    // console.log("hello!");
};
onBeforeMount(() => {
    console.log(" hook onBeforeMount được gọi");
});
const caculatorC = () => {
    return countC.value ** 2;
};
const caculatorD = computed(() => {
    console.log(111111);
    return countD.value ** 2;
});
/*
    giai đoạn update
    onBeforeUpdate
    onUpdated
*/
/*
    giai đoạn unmounting: giai đoạn hủy tức là component được loại bỏ, tháo gỡ
    khỏi DOM.

*/
onBeforeUpdate(() => {
    console.log("hook onbeforeupdate được gọi!");
});
onUpdated(() => {
    console.log("hook onupdated được gọi!");
});
onBeforeUnmount(() => {
    console.log("hook onBeforeUnmount được gọi!");
});
onUnmounted(() => {
    console.log(" hook onUnmounted được  gọi!");
});
const handleChange = () => {
    countC.value++;
};
</script>
<style></style>
