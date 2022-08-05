// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDACQaTSlXujqb9Gx84BPRz6RxehrYX9dQ",
  authDomain: "testlogin-e307b.firebaseapp.com",
  projectId: "testlogin-e307b",
  storageBucket: "testlogin-e307b.appspot.com",
  messagingSenderId: "988980011130",
  appId: "1:988980011130:web:2c0fa0eda47ed0bd941bc3",
  measurementId: "G-M7LJ54WK53"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//khởi tạo firebase