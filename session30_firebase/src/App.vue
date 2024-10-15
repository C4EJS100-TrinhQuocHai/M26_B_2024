<template>
    <div>
        <h1>firebase</h1>
        <input type="file" @change="handleChange" />
        <button @click="uploadImage">upload</button>

        <img :src="downLoadUrl" alt="" />
    </div>
</template>
<script setup>


import { ref } from "vue";
import storage from "./firebase/config";
import {
    ref as storageRef,
    getDownloadURL,
    uploadBytes,
} from "firebase/storage";
const image = ref("");
const downLoadUrl = ref("");
const handleChange = (event) => {
    console.log("giá trị ", event.target.files[0]);
    image.value = event.target.files[0];
};
const uploadImage = async () => {
    //
    try {
        const storageReference = storageRef(
            storage,
            `upload/${image.value.name}`
        );
        await uploadBytes(storageReference, image.value);
        downLoadUrl.value = await getDownloadURL(storageReference);
        console.log(111111, downLoadUrl);
    } catch (error) {}
};
</script>
<style lang=""></style>
