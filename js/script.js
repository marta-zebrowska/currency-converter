const currencyElement = document.querySelector(".js-currency");
const rateElement = document.querySelector(".js-rate");
const formElement = document.querySelector(".js-form");
const productElement = document.querySelector(".js-product");
const resultElement = document.querySelector(".js-result");
const submitElement = document.querySelector(".js-submit");

const calculateProduct = (event) => {
  event.preventDefault();

  const currency = currencyElement.value;
  const rate = rateElement.value;
  
  const product = currency / rate;
  productElement.innerText = product.toFixed(2);
};

const changeText = () => {
 resultElement.innerText = "Gratulacje! Posiadasz ";
};

    const init = () => {
      console.log("Cześć!");
      formElement.addEventListener("submit", calculateProduct, changeText); 
      formElement.addEventListener("submit", changeText); 
    };  
    
    init();