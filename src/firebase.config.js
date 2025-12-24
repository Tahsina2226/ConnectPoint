/* eslint-disable no-unused-vars */
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCeVb0amsuePAKnlkLucqKMaLEBOaZucsM",
  authDomain: "connectpoint-32330.firebaseapp.com",
  projectId: "connectpoint-32330",
  storageBucket: "connectpoint-32330.appspot.com", // ✅ correct your storageBucket
  messagingSenderId: "599350623112",
  appId: "1:599350623112:web:f543455eb896d5e608d83d",
  measurementId: "G-BK16T6P9JG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Auth
export const auth = getAuth(app);
export default app;
