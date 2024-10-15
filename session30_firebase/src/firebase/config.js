// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.API_KEY,
    authDomain: "m26vue.firebaseapp.com",
    projectId: "m26vue",
    storageBucket: "m26vue.appspot.com",
    messagingSenderId: "861291182818",
    appId: "1:861291182818:web:5031aca1b0d27a8f4dbcbb"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
export default storage;