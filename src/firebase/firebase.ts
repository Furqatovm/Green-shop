// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD0EAm5o1jS49IFQoWsLCcBxQPkF6_Fqtc",
  authDomain: "authentification-d37ca.firebaseapp.com",
  projectId: "authentification-d37ca",
  storageBucket: "authentification-d37ca.firebasestorage.app",
  messagingSenderId: "483071209776",
  appId: "1:483071209776:web:7564d966d91779f23f58f5",
  measurementId: "G-M1VSTWWQX8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);