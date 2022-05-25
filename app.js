const card1 = document.querySelector(".container .card-1");
const card2 = document.querySelector(".container .card-2");
const buttons = document.querySelectorAll(
  ".container .card-1 .card-body .rating-buttons button"
);
const submitButton = document.querySelector(
  ".container .card-1 .card-footer button"
);
const span = document.querySelector(".container .card-2 .card-body span ");

let rating = "";

card2.style.display = "none";

buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    rating = e.target.id;
    span.textContent = rating;
  });
});

submitButton.addEventListener("click", (e) => {
  if (rating) {
    card2.style.display = "block";
    card1.style.display = "none";
  }
});
