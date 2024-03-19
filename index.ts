#! /usr/bin/env node

import inquirer from "inquirer";

const asnwer = await inquirer.prompt([
  { message: "Enter_first_number:", type: "number", name: "FirstNumber" },
  { message: "Enter_second_number", type: "number", name: "SecondNumber" },
  {
    message: "Please select one operator to perform action",
    type: "list",
    name: "operator",
    choices: ["Addition (+)","Subtraction (-)","Multiplication (x)","Division (÷)","Modulus (%)","Exponentiation (xx)"],
  },
]);

if (asnwer.operator === "Addition (+)"){
    console.log(`Result is = ${asnwer.FirstNumber + asnwer.SecondNumber}`);  
} else if(asnwer.operator === "Subtraction (-)"){
    console.log(`Result is = ${asnwer.FirstNumber - asnwer.SecondNumber}`);  
} else if(asnwer.operator === "Multiplication (x)"){
    console.log(`Result is = ${asnwer.FirstNumber * asnwer.SecondNumber}`);  
} else if(asnwer.operator === "Division (÷)"){
    console.log(`Result is = ${asnwer.FirstNumber / asnwer.SecondNumber}`);  
} else if(asnwer.operator === "Modulus (%)"){
    console.log(`Result is = ${asnwer.FirstNumber % asnwer.SecondNumber}`);  
} else if(asnwer.operator === "Exponentiation (xx)"){
    console.log(`Result is = ${asnwer.FirstNumber ** asnwer.SecondNumber}`);  
} else {console.log("Please select vaild operator")}
