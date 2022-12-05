import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAmKSMNrBQRt3N_pmxcJ0B4nOpzej9Q3fM",
  authDomain: "foodthoughtapp.firebaseapp.com",
  databaseURL: "https://foodthoughtapp-default-rtdb.firebaseio.com",
  projectId: "foodthoughtapp",
  storageBucket: "foodthoughtapp.appspot.com",
  messagingSenderId: "327793095962",
  appId: "1:327793095962:web:9251006e8e5f299b6168a3"
};

const app = getApps.Length > 0 ? getApp(): initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);
export { app, firestore, storage };