import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDj1oimcEz-Ej4rtJkxpyYemOFsepR-8EM",
  authDomain: "tasks-ce12c.firebaseapp.com",
  databaseURL: "https://tasks-ce12c-default-rtdb.firebaseio.com",
  projectId: "tasks-ce12c",
  storageBucket: "tasks-ce12c.appspot.com",
  messagingSenderId: "31223986479",
  appId: "1:31223986479:web:17350c34e2c057966309da",
};
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);