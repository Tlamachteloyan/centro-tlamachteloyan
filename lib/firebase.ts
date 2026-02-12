import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCYydLBLNJYPj2PsZ_MBbRBsKk2cKzcUas",
  authDomain: "centro-tlamachteloyan.firebaseapp.com",
  projectId: "centro-tlamachteloyan",
  storageBucket: "centro-tlamachteloyan.firebasestorage.app",
  messagingSenderId: "1026614859691",
  appId: "1:1026614859691:web:73b6a928fdbafcce68e4ee"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
