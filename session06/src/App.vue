<template>
    <div>
        <input
            v-model="valueInput"
            type="text"
            placeholder="thêm nội dung công việc"
        />
        <button @click="addJob">thêm</button>
        <div class="list">
            <h1>Danh sách công việc</h1>
            <!-- hiển thị danh sách công việc -v-for -->
            <ul>
                <li v-for="job in jobs" :key="job.id">
                    <input @change="handleChange(job.id)" type="checkbox" />
                    <span v-if="job.status" class="success">{{
                        job.name
                    }}</span>
                    <span v-else>{{ job.name }}</span>

                    <button @click="handleDelete(job.id)">xóa</button>
                </li>
            </ul>
        </div>
        <h2>số công việc hoàn thành: {{ completeJob }}</h2>
        <button @click="test($event)">click</button>
    </div>
</template>
<script setup>
import { computed, reactive, ref } from "vue";
// tạo tên công việc
const valueInput = ref("");
// tạo mảng chứa các công việc
let jobs = reactive(JSON.parse(localStorage.getItem("jobs")) || []);
// khai báo hàm thêm công viêc
const addJob = () => {
    // console.log("tên công việc", valueInput.value);
    let job = {
        name: valueInput.value,
        status: false,
        id: Math.ceil(Math.random() * 988888888),
    };
    jobs.push(job);
    console.log("mảng chứa danh sách công việc", jobs);
    // lưu danh sách công việc trên local
    localStorage.setItem("jobs", JSON.stringify(jobs));
    valueInput.value = "";
};
// khai báo hàm đi tính toán số lượng công việc hoàn thành
const completeJob = computed(() => {
    return jobs.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.status;
    }, 0);
});
// hàm đi cập nhật trạng thái của từng công việc!
const handleChange = (id) => {
    console.log("giá trị id", id);
    // tìm vị trí công việc có id trong mảng jobs==> đi cập nhật status
    let index = jobs.findIndex((item) => {
        return item.id === id;
    });
    console.log("vị trí của phần tử cần cập nhật", index);
    jobs[index].status = !jobs[index].status;
    // sau khi cập nhật được trạng thái công việc rồi phải lưu trên local;
    localStorage.setItem("jobs", JSON.stringify(jobs));
};
// hàm đi xóa công việc
const handleDelete = (id) => {
    let arrFilter = jobs.filter((item) => {
        return item.id != id;
    });
    jobs.length = 0;
    jobs.push(...arrFilter);
    // sau khi xóa xong thì lưu lại trên local
    localStorage.setItem("jobs", JSON.stringify(jobs));
};
const $event = ref(0);
const test = (param) => {
    console.log(111, param);
};

// let items = [
//     {`
//         id: 1,
//         status: false,
//     },
//     {
//         id: 2,
//         status: true,
//     },
//     {
//         id: 3,
//         status: true,
//     },
//     {
//         id: 4,
//         status: false,
//     },
// ];
// console.log(111111, 0 + true);
</script>
<style>
.success {
    text-decoration: line-through;
}
</style>
