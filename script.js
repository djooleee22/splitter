var bill = document.querySelector(".first-input");
var numberOfPeople = document.querySelector(".second-input");
var calculateBtn = document.querySelector(".btn1");
var resetBtn = document.querySelector(".btn-2");
var tipAmount = document.querySelector(".tip-amount");
var total = document.querySelector(".total");
var five = document.querySelector(".five");
var ten = document.querySelector(".ten");
var fifteen = document.querySelector(".fifteen");
var twfive = document.querySelector(".twfive");
var fifty = document.querySelector(".fifty");
var tipSelected = undefined;
var allBtns = document.querySelectorAll(".all-btns");

function removeActive() {
  for (var i = 0; i < allBtns.length; i++) {
    allBtns[i].classList.remove("grey");
  }
}

five.addEventListener("click", function () {
  tipSelected = 0.05;
  removeActive();
  five.classList.add("grey");
});
ten.addEventListener("click", function () {
  tipSelected = 0.1;
  removeActive();
  ten.classList.add("grey");
});
fifteen.addEventListener("click", function () {
  tipSelected = 0.15;
  removeActive();
  fifteen.classList.add("grey");
});
twfive.addEventListener("click", function () {
  tipSelected = 0.25;
  removeActive();
  twfive.classList.add("grey");
});
fifty.addEventListener("click", function () {
  tipSelected = 0.5;
  removeActive();
  fifty.classList.add("grey");
});

calculateBtn.addEventListener("click", function (event) {
  if (bill !== "" && numberOfPeople !== "" && tipSelected !== undefined) {
    tipAmount.textContent =
      "$" + ((bill.value * tipSelected) / numberOfPeople.value).toFixed(2);

    total.textContent =
      "$" +
      (
        (bill.value * tipSelected) / numberOfPeople.value +
        bill.value / numberOfPeople.value
      ).toFixed(2);
  }
});

resetBtn.addEventListener("click", function () {
  bill.value = "";
  tipSelected = undefined;
  numberOfPeople.value = "";
  tipAmount.textContent = "";
  total.textContent = "";
});
