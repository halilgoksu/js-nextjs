import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

//Fireabase configuration
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.DOMAIN,
  projectId: process.env.PROJECT_ID,
  storegeBucket: process.env.BUCKET,
  messageSenderId: process.env.MESSAGE_SENDER,
  appId: process.env.PUBLIC_APP_ID,
};

//Initialize Firabase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
