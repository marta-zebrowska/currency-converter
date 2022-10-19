console.log("Cześć!");

let currencyElement = document.querySelector(".js-currency");
let rateElement = document.querySelector(".js-rate");
let formElement = document.querySelector(".js-form");
let productElement = document.querySelector(".js-product");
let resultElement = document.querySelector(".js-result");
let submitElement = document.querySelector(".js-submit");

formElement.addEventListener("submit", (event) => {
event.preventDefault();

let currency = currencyElement.value;
let rate = rateElement.value;

let product = currency * rate;

productElement.innerText = product.toFixed(2);
});

submitElement.addEventListener("click", () => {
  resultElement.classList.remove("hide");

  resultElement.innerText = "Gratulacje! Posiadasz ";
    });