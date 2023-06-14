const API =
  "https://v6.exchangerate-api.com/v6/7940d2889133ce570fa0a323/latest/";

const calculateCurrency = async () => {
  const inputElement = document.querySelector("input");
  const selectElement = document.getElementById("mySelect");
  const resultUSD = document.getElementById("USD");
  const resultRUB = document.getElementById("RUB");
  const resultKZ = document.getElementById("KZ");
  const resultKG = document.getElementById("KG");
  const resultCNY = document.getElementById("CNY");

  const response = await fetch(API + selectElement.value);
  const data = await response.json();
  console.log("data: ", data);

  const inputValue = parseFloat(inputElement.value);

  if (!isNaN(inputValue)) {
    resultUSD.textContent = `USD: ${inputValue * data.conversion_rates.USD}`;
    resultRUB.textContent = `RUB: ${inputValue * data.conversion_rates.RUB}`;
    resultKZ.textContent = `KZ: ${inputValue * data.conversion_rates.KZT}`;
    resultKG.textContent = `KG: ${inputValue * data.conversion_rates.KGS}`;
    resultCNY.textContent = `CNY: ${inputValue * data.conversion_rates.CNY}`;
  } else {
    resultUSD.textContent = "USD: 0";
    resultRUB.textContent = "RUB: 0";
    resultKZ.textContent = "KZ: 0";
    resultKG.textContent = "KG: 0";
    resultCNY.textContent = "CNY: 0";
  }
};

const inputElement = document.querySelector("input");
inputElement.addEventListener("input", calculateCurrency);
