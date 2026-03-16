function calculateYield(){

let price = document.getElementById("price").value;
let rent = document.getElementById("rent").value;
let expenses = document.getElementById("expenses").value;

price = Number(price);
rent = Number(rent);
expenses = Number(expenses);

let annualRent = rent * 12;

let grossYield = (annualRent / price) * 100;

let annualProfit = annualRent - expenses;

let netYield = (annualProfit / price) * 100;

document.getElementById("result").innerHTML =
"Gross Yield: " + grossYield.toFixed(2) + "% | Net Yield: " + netYield.toFixed(2) + "%";

document.getElementById("profit").innerHTML =
"Estimated Annual Profit: £" + annualProfit.toFixed(0);

}
