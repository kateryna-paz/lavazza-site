import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "coffeeshop-lavazza.firebaseapp.com",
  databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL,
  projectId: "coffeeshop-lavazza",
  storageBucket: "coffeeshop-lavazza.appspot.com",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db };
