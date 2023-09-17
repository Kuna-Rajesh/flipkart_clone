import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAXaN0nkIj642lBI8QNzhX1n714n3S07fI",
  authDomain: "swiggy-clone-1fcee.firebaseapp.com",
  projectId: "swiggy-clone-1fcee",
  storageBucket: "swiggy-clone-1fcee.appspot.com",
  messagingSenderId: "999481540967",
  appId: "1:999481540967:web:d9ac6b4d4b875bca1bafc2",
  measurementId: "G-7GNJ744G4V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;