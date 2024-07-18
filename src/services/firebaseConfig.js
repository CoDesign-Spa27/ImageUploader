import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
    apiKey: "AIzaSyBWlqW1RFN6u7s8N6ca_gQ2uTInKZ9Sed0",
    authDomain: "imageuploader-76d09.firebaseapp.com",
    databaseURL: "https://imageuploader-76d09-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "imageuploader-76d09",
    storageBucket: "imageuploader-76d09.appspot.com",
    messagingSenderId: "609740659466",
    appId: "1:609740659466:web:9beb3c223217967901b8f3",
    measurementId: "G-SCXB8FJGZW"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db,storage };
