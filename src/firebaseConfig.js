// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAvYovhnnjjNXRaAqX_R1fg88mV0d5hEAA",
  authDomain: "facebook-clone-162d5.firebaseapp.com",
  projectId: "facebook-clone-162d5",
  storageBucket: "facebook-clone-162d5.appspot.com",
  messagingSenderId: "1064375820184",
  appId: "1:1064375820184:web:d3b8857c921a50996cd5ed",
  measurementId: "G-HF8X63VHVB",
};
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
export { auth };
export default db;