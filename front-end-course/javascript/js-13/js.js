/////////////////////////////factorial////////////////////////////

let result = 1;
let factorial = 15;

for (let i = 1; i <= factorial; i++) {
    result *= i;
}

/////////////////////////////factorial////////////////////////////

let result = 1;
let factorial = 5;


while (factorial) {
    result *= factorial;
    --factorial;

}

function factorial(n) {
    if (n === 0) return 1;

    return n * factorial(n - 1)
}

let result = factorial() //n

/////////////////////////////fibonachi////////////////////////////

function fib(n) {
    if (n === 1 || n === 2) return 1;
    return fib(n - 1) + fib(n - 2)
}

let result = fib(1)