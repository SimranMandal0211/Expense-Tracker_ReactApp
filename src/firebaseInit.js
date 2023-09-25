import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCyF5zlFhsK6zy19Rs09aBAydUFKmvNSaM",
  authDomain: "expense-tracker-34ca1.firebaseapp.com",
  projectId: "expense-tracker-34ca1",
  storageBucket: "expense-tracker-34ca1.appspot.com",
  messagingSenderId: "62585006668",
  appId: "1:62585006668:web:b9fe33f091e7aaa5ef22e9"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
