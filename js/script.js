console.log("Cześć!");

const currencyElement = document.querySelector(".js-currency");
const rateElement = document.querySelector(".js-rate");
const formElement = document.querySelector(".js-form");
const productElement = document.querySelector(".js-product");
const resultElement = document.querySelector(".js-result");
const submitElement = document.querySelector(".js-submit");

formElement.addEventListener("submit", (event) => {
event.preventDefault();

const currency = currencyElement.value;
const rate = rateElement.value;

let product = currency / rate;

productElement.innerText = product.toFixed(2);
});

submitElement.addEventListener("click", () => {
  resultElement.classList.remove("hide");

  resultElement.innerText = "Gratulacje! Posiadasz ";
    });