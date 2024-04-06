#! /usr/bin/env node
import inquirer from "inquirer";

const currency: any = {
  USD: 1,
  PKR: 277.54,
  EURO: 0.92,
  POUND: 0.79,
  AED: 3.67,
};

let userInput = await inquirer.prompt([
  {
    message: "Enter From Currency",
    name: "from",
    type: "list",
    choices: ["USD", "PKR", "EURO", "POUND", "AED"],
  },
  {
    message: "Enter To Currency",
    name: "to",
    type: "list",
    choices: ["USD", "PKR", "EURO", "POUND", "AED"],
  },
  {
    name: "amount",
    message: "Enter Amount",
    type: "number",
  },
]);

let userFromCurrency = userInput.from;
let userToCurrency = userInput.to;
let fromAmount = currency[userFromCurrency];
let toAmount = currency[userToCurrency];
let amount = userInput.amount;
let baseAmount = amount / fromAmount;
let convertedAmount = baseAmount * toAmount;
console.log(convertedAmount);
