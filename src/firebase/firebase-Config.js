import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  // Your Firebase configuration details here
};

let app;
let auth;
let firestoreDB;

try {
  // Initialize Firebase
  app = initializeApp(firebaseConfig);

  // Initialize Firebase authentication
  auth = getAuth(app);

  // Initialize Firestore
  firestoreDB = getFirestore(app);
} catch (error) {
  console.error("Error initializing Firebase:", error);
  // Handle the error appropriately, e.g., display a message to the user or log it
}

export { auth, firestoreDB };
