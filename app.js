import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCD0yMui0XOvja7ZdfINoku7IeVU5QAj44",
  authDomain: "addreview-2c617.firebaseapp.com",
  databaseURL: "https://addreview-2c617-default-rtdb.firebaseio.com",
  projectId: "addreview-2c617",
  storageBucket: "addreview-2c617.appspot.com",
  messagingSenderId: "346798136905",
  appId: "1:346798136905:web:4fc902a5fde9a09eaea998"
};
const firebaseApp = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(firebaseApp);

// Add a review to the Firestore database
async function addReview(name, comment) {
  const reviewRef = collection(db, "reviews");
  const reviewDoc = await addDoc(reviewRef, {
    name: name,
    comment: comment
  });
  console.log("Review added with ID: ", reviewDoc.id);
}

// Example usage
addReview("John Doe", "I love Gooster Energy Drink!");
