// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// console.log(import.meta.env.vite_abc);
const firebaseConfig = {
    apiKey: "AIzaSyDcrz1U4CCjNTK1EztPxkCF5oNkIUGbJUA",
    authDomain: "autocar-client.firebaseapp.com",
    projectId: "autocar-client",
    storageBucket: "autocar-client.appspot.com",
    messagingSenderId: "869619435069",
    appId: "1:869619435069:web:4eaf71c2c207f1b0c84c54"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
