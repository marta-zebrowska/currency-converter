    const updateResultText = () => {
      const resultElement = document.querySelector(".js-result");
 
      resultElement.innerText = "Gratulacje! Posiadasz ";
    };

    const calculateProduct = () => {
      const currencyElement = document.querySelector(".js-currency");
      const rateElement = document.querySelector(".js-rate");
      
      const currency = currencyElement.value;
      const rate = rateElement.value;

      return currency / rate;
    };

    const printProduct = (currency, rate) => {
      const productElement = document.querySelector(".js-product");
      
      productElement.innerText = calculateProduct(currency, rate).toFixed(2);
    };
      
    const onFormSubmit = (event) => {
      event.preventDefault();
      
      updateResultText();
      printProduct();
    };

    const init = () => {
      const formElement = document.querySelector(".js-form");

      console.log("Cześć!");
      formElement.addEventListener("submit", onFormSubmit); 
    };  
    
    init();