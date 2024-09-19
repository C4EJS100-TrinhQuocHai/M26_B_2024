<template>
  <div>
    <p> binding property
      <ul>
        <li>1. v-bind </li>
        <li>2. v-if, v-else, v-else-if</li>
        <li>3. v-show </li>
        <li>4. v-for </li>
        <li>5. v-model </li>
      </ul>
    </p>
    <p> event</p>
    <img v-bind:src="urlImage" alt="">
    <div v-bind:style="{ 'font-size': size}">
        Text example
    </div>
    <div v-bind:class="className">
    The class is set with Vue
    </div>
    <p>************************</p>
    <p>V-IF</p>
    <p v-if="isVIf"> hiển thị nếu điều kiện v-if đúng!</p>
    <p>*********</p>
    <p>V-show</p>
    <p v-show="isVShow"> hiển thị nếu điều kiện v-show thỏa mãn</p>
    <ul>
      <li v-if="age>15"> lớn hơn 15</li>
      <li v-if="age>30"> Tuổi trung niên</li>
      <li v-else-if="age>18"> Tuổi thanh niên</li>
      <li v-else-if="age>6"> tuổi trưởng thành </li>
      <li v-else> trẻ nhỏ!</li>
    </ul>
    <p>**********************</p>
     <p>V-FOR: Hiển thị dữ liệu về mảng</p>
     <ul>
      <li v-for="(student,index) in students" :key="student.id" > {{index+1}} {{student.name}}</li>
     </ul>
     <p>*****************</p>
     <p> V-model </p>
     <div>
      <input  :value="inputText" type="text" @input="handleChange">
      <p> giá trị bạn nhập:{{inputText}} </p>
      ************
      <p>bài tập 11</p>
      <p> count: {{count}} </p>
      <button @click="increase">increase</button>
      ********************************
      <p> event </p>
      <button @click="handleClick('hello')">click </button>
     </div>
     <A></A>
  </div>

</template>

<script setup>

 import {ref} from "vue";
 import A from "./components/A.vue"
  const urlImage="data:image/jpeg;base64,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";
  const size="90px";
  const className="heading";
  const isVIf= false;
  const isVShow=true;
  const age=20;
  // console.log('"hello"');
  
  const students=[
    {
      id:1,
      name:"Hồng Vân"
    },
    {
      id:2,
      name:"ánh Linh"
    },
    {
      id:3,
      name:"Thảo Phương"
    },
  ]
  const inputText= ref("hello");//{value:"hello"}
  const count=ref(1);
  console.log("inputText",inputText);
  // khai báo hàm onchange
   const handleChange=(event)=>{
    console.log("giá trị nhập", event.target.value);
    inputText.value=event.target.value;
   }
  /* 
    phân việt v-if và v-show
    - đối với v-if
      + nếu điều kiện đúng thì render ra DOM
      + nếu điều kiện sai thì không render ra DOM
    - đối với v-show thì nếu điều kiện đúng hay sai thì element vẫn được
      render ra DOM, chỉ khác nếu điều kiện sai: display:none
    - ngoài ra đối với v-if thì có thể dùng thêm  v-else, v-else-if
  */
 // khai báo hàm tăng count
 const increase=()=>{
  console.log("đã gọi vào hàm!");
  count.value=count.value+1;
 }
 // gọi hàm khi click
 const handleClick=(mess)=>{
    console.log("giá trị nhận về",mess); 
 }

</script>

<style>
  .heading{
    color: green;
  }
</style>