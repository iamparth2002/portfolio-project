// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCgNYdgbprwnbyWaXQ_6ZyahN558xOtG7U",
  authDomain: "portfolio-c5ed5.firebaseapp.com",
  projectId: "portfolio-c5ed5",
  storageBucket: "portfolio-c5ed5.appspot.com",
  messagingSenderId: "725268804672",
  appId: "1:725268804672:web:ed2644441eaa4488bd1ba5",
  measurementId: "G-EF4QEGDZ7D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);