import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCiSPVPFZvhLEyUPM3x9-19IqnbiBnlBpE",
  authDomain: "wealth-health-aa388.firebaseapp.com",
  projectId: "wealth-health-aa388",
  storageBucket: "wealth-health-aa388.appspot.com",
  messagingSenderId: "551700659823",
  appId: "1:551700659823:web:0aa8780b0d992420e5979a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
