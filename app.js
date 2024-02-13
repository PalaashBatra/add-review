const firebaseConfig = {
  apiKey: "AIzaSyCD0yMui0XOvja7ZdfINoku7IeVU5QAj44",
  authDomain: "addreview-2c617.firebaseapp.com",
  projectId: "addreview-2c617",
  storageBucket: "addreview-2c617.appspot.com",
  messagingSenderId: "346798136905",
  appId: "1:346798136905:web:4fc902a5fde9a09eaea998"
};


firebase.initializeApp(firebaseConfig);
const db = firebase.database();
const reviewsRef = db.ref("reviews");
const reviewForm = document.querySelector("#review-form");
const reviewInput = document.querySelector("#review");
const reviewerInput = document.querySelector("#name");
const reviewsDiv = document.querySelector("#reviews");

reviewForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const review = reviewInput.value;
  const reviewer = reviewerInput.value;

  reviewsRef.once("value", (snapshot) => {
    const reviewCount = snapshot.numChildren();
    const newReviewRef = reviewsRef.child(reviewCount);
    newReviewRef.set({ review, reviewer });
  });

  reviewInput.value = "";
  reviewerInput.value = "";
});

reviewsRef.on("child_added", (snapshot) => {
  const newReview = snapshot.val();
  const newReviewDiv = document.createElement("div");
  newReviewDiv.textContent = `Reviewer: ${newReview.reviewer}, Review: ${newReview.review}`;
  reviewsDiv.appendChild(newReviewDiv);
});
