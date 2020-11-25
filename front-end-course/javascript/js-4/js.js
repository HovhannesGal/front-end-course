let monthNumber = +prompt("write a number");
let month;


switch (monthNumber) {
    case 1:
        month = "hunvar";
        break;
    case 2:
        month = "petrvar";
        break;
    case 3:
        month = "mart";
        break;
    case 4:
        month = "april";
        break;
    default:
        month = "error";
}

//////////////////////*//////////////////////

const firstNum = +prompt("write first number")
const operator = prompt("write operator number")
const secondNum = +prompt("write second number")
let result;

switch (operator) {
    case "/":
        result = firstNum / secondNum;
        break;
    case "*":
        result = firstNum * secondNum;
        break;
    case "+":
        result = firstNum + secondNum;
        break;
    case "-":
        result = firstNum - secondNum;
        break;
    default:
        result = "error";

}
console.log(firstNum + " " + operator + " " + secondNum + " = " + result)

//////////////////////*//////////////////////

let num = +prompt("write number")

if (num === 5 || num === 7 || num === 19) {
    // code
}

switch (num) {
    case 5:
    case 7:
    case 19: // code

}

//////////////////////*//////////////////////