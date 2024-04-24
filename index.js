#! /usr/bin/env node
import inquirer from "inquirer";
let currency = {
    USD: 1,
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.57,
    PKR: 280
};
let useranswer = await inquirer.prompt([{
        name: "fromcurrency",
        message: "Enter the currency that you want to change from",
        type: "list",
        choices: ["USD", "EUR", "GBP", "INR", "PKR"]
    },
    {
        name: "tocurrency",
        type: "list",
        message: "Enter the currency that you want to change to",
        choices: ["USD", "EUR", "GBP", "IND", "PKR"]
    }, {
        name: "amount",
        type: "number",
        message: "Enter your amount"
    }
]);
let fromAmount = currency[useranswer.fromcurrency];
let toAmount = currency[useranswer.tocurrency];
let amount = useranswer.amount;
let baseAmount = amount / fromAmount;
let convertedAmount = baseAmount * toAmount;
console.log(convertedAmount);
