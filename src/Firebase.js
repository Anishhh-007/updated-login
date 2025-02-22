import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyBZhKiZ3J67E7YdDFe4MdKxz9_R0XbbHR4",
    authDomain: "basic-tuto.firebaseapp.com",
    projectId: "basic-tuto",
    storageBucket: "basic-tuto.firebasestorage.app",
    messagingSenderId: "820721393316",
    appId: "1:820721393316:web:99c2849c86af85615b1031",
    measurementId: "G-WRMMNR4PQ8",
    databaseURL: 'https://basic-tuto-default-rtdb.firebaseio.com'
  };

export const  app = initializeApp(firebaseConfig);
