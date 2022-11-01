    const updateResultText = () => {
      const resultElement = document.querySelector(".js-result");
 
      resultElement.innerText = "Gratulacje! Posiadasz ";
    
    };

    const printProduct = (event) => {
      event.preventDefault();
      
      const currencyElement = document.querySelector(".js-currency");
      const rateElement = document.querySelector(".js-rate");
      const productElement = document.querySelector(".js-product");
      const currency = currencyElement.value;
      const rate = rateElement.value;

      productElement.innerText = calculateProduct(currency, rate).toFixed(2);
    };
    
    const calculateProduct = (currency, rate) => {
    
     return currency / rate;
    };
      
    const init = () => {
      const formElement = document.querySelector(".js-form");

      console.log("Cześć!");
      formElement.addEventListener("submit", updateResultText); 
      formElement.addEventListener("submit", printProduct);
    };  
    
    init();