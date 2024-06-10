#! /usr/bin/env node
import inquirer from "inquirer";
console.log("   ");
console.log("   ");
console.log("CLI CALCULATOR BY SYED ARHAM");
console.log("   ");
console.log("   ");
let answer = await inquirer.prompt([
  { message: "Enter First Number", type: "number", name: "FirstNumber" },
  { message: "Enter Second Number", type: "number", name: "SecondNumber" },
  {
    message: "Select Operation",
    type: "list",
    name: "operator",
    choices: ["Addition", "Subtraction","Multiplication","Division","Exponent","Modulus"],
  },
]);
// conditional statement

if(answer.operator === "Addition"){
  console.log(`Your answer is ${answer.FirstNumber + answer.SecondNumber}`);
}
else if(answer.operator === "Subtraction"){
  console.log(`Your answer is ${answer.FirstNumber - answer.SecondNumber}`);
}
else if(answer.operator === "Multiplication"){
  console.log(`Your answer is ${answer.FirstNumber * answer.SecondNumber}`);
}
else if(answer.operator === "Division"){
console.log(`Your answer is ${answer.FirstNumber / answer.SecondNumber}`);
}
else if(answer.operator === "Exponent"){
  console.log(`Your answer is ${answer.FirstNumber ** answer.SecondNumber}`)
}
else if(answer.operator === "Modulus"){
  console.log(`Your answer is ${answer.FirstNumber % answer.SecondNumber}`)
}
console.log("Thanks For Using Calculator");