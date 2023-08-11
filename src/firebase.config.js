import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const config = {
    apiKey: "AIzaSyC6T1JkgpCx_seq4466h1TDMLnJOnW6P_I",
    authDomain: "foodiestore-26c73.firebaseapp.com",
    databaseURL: "https://foodiestore-26c73-default-rtdb.firebaseio.com",
    projectId: "foodiestore-26c73",
    storageBucket: "foodiestore-26c73.appspot.com",
    messagingSenderId: "1062337317486",
    appId: "1:1062337317486:web:a026de69caf7dc5f69347f",
    measurementId: "G-4F22DHS6ZH"
  }
const app = initializeApp(config);
export const db = getFirestore(app);
