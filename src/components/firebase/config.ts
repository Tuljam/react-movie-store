import { initializeApp } from "firebase/app";

export const firebaseConfig = {
  apiKey: "AIzaSyCP6uIrYAHmbb-p6lUoKrpRDLWaAVvz5lE",
  authDomain: "react-movie-store.firebaseapp.com",
  projectId: "react-movie-store",
  storageBucket: "react-movie-store.appspot.com",
  messagingSenderId: "679330761372",
  appId: "1:679330761372:web:d9cca380a7ea4dd8207b59",
  measurementId: "G-Z4T8TP52NQ",
};

const app = initializeApp(firebaseConfig);
