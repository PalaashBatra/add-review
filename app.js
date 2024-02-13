// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCD0yMui0XOvja7ZdfINoku7IeVU5QAj44",
  authDomain: "addreview-2c617.firebaseapp.com",
  databaseURL: "https://addreview-2c617-default-rtdb.firebaseio.com",
  projectId: "addreview-2c617",
  storageBucket: "addreview-2c617.appspot.com",
  messagingSenderId: "346798136905",
  appId: "1:346798136905:web:4fc902a5fde9a09eaea998"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function addReview(name, comment) {
  // Generate a unique review number
  const reviewNumber = db.collection("reviews").doc().id;

  // Add the review to the database
  db.collection("reviews")
    .doc(`review${reviewNumber}`)
    .set({
      name: name,
      comment: comment
    });
}

