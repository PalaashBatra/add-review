const firebaseConfig = {
  // Your Firebase configuration goes here.
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

  const newReviewRef = reviewsRef.push();
  newReviewRef.set({ review, reviewer });

  reviewInput.value = "";
  reviewerInput.value = "";
});

reviewsRef.on("child_added", (snapshot) => {
  const newReview = snapshot.val();
  const newReviewDiv = document.createElement("div");
  newReviewDiv.textContent = `Reviewer: ${newReview.reviewer}, Review: ${newReview.review}`;
  reviewsDiv.appendChild(newReviewDiv);
});
