```
// Import the Firebase library
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "your-api-key",
  authDomain: "your-auth-domain",
  projectId: "your-project-id",
  storageBucket: "your-storage-bucket",
  messagingSenderId: "your-messaging-sender-id",
  appId: "your-app-id"
};
const firebaseApp = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(firebaseApp);

```
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

