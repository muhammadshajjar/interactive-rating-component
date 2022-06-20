const listsParent = document.querySelector(".card__rating");
const ratings = document.querySelectorAll(".rating");
const btn = document.querySelector(".btn");
const thankyouCard = document.querySelector(".thnkyou-state");
const submitCard = document.querySelector(".submit-state");
const ratingNum = document.querySelector(".rating-num");

thankyouCard.classList.add("hidden");
let ratingChoice = 0;

const removeAllActive = () => {
  for (let i = 0; i < ratings.length; i++) {
    ratings[i].classList.remove("active");
  }
};

listsParent.addEventListener("click", (e) => {
  if (e.target.classList.contains("rating")) {
    removeAllActive();
    e.target.classList.add("active");
    ratingChoice = e.target.textContent;
  }
});

btn.addEventListener("click", () => {
  if (ratingChoice) {
    thankyouCard.classList.remove("hidden");
    submitCard.classList.add("hidden");
    ratingNum.textContent = ratingChoice;
  } else {
    alert("Please select some rating out of 5");
  }
});
