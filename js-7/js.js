//////////////////////1//////////////////////

let arr = [1, 10, 2, 20];
let n = 0;
for (let i = 0; i < arr.length; i++) {
    if (i > 0) {
        n += 1
    }
}
console.log(n)

//////////////////////2//////////////////////

let arr = [-1, 10, -2, 20];
let n = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
        n = n + arr[i]
    }
}

//////////////////////3//////////////////////

let arr = [1, 10, 2, 20, 3, 30];
let n = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
        n = (n + arr[i])
    }

}
n = n / arr.length

//////////////////////4//////////////////////

let arr = [1, 10, 2, 20, 3, 30];
let n = 0;
for (let i = 0; i < arr.length; i + 2) {

    n = n + arr[i]


}
console.log(n) //////////?

//////////////////////5//////////////////////

let arr = [-1, 10, -2, 20, -3, 30];
let n = 0;
k = 0;
z = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
        n = n + 1;
    } else {
        k = k + 1;
    }

}
z = n - k;


console.log(z)

//////////////////////6//////////////////////
//////////////???????????

//////////////////////7//////////////////////
//////////////???????????

//////////////////////8//////////////////////
//////////////???????????

//////////////////////9//////////////////////

let arr = [0, 5, 10, 21, 4, 6]
n = 0;

for (i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
        n = n + Math.pow(arr[i], 2);
    }

}
console.log(n)

//////////////////////10//////////////////////

let arr = [1, 12, 10, 18, 4, 6]
n = 0,
    k = 0;
z = 0;

for (i = 0; i < arr.length; i++) {
    if (arr[i] % 3 == 0) {
        n = n + arr[i];
        k += 1
    }

}
z = n / k
console.log(z)

//////////////////////11//////////////////////

let k = +prompt("grir tiv")
let arr = [1, 12, 10, 18, 4, 6]
n = 0;


for (i = 0; i < arr.length; i++) {
    if (arr[i] % k == 0) {
        n = n + arr[i];
    }

}
console.log(n)

//////////////////////12//////////////////////

let arr = [1, 5, 10, 21, 4, 6]
n = 0;

for (i = 0; i < arr.length; i++) {
    if ((arr[i] + i) % 3 == 0) {
        n = n + Math.pow(arr[i], 2);

    }

}
console.log(n)

//////////////////////13//////////////////////

let arr = [1, 5, 10, 21, 4, 6]
maxNumber = 0;

for (i = 0; i < arr.length; i++) {
    if (maxNumber < arr[i]) {
        maxNumber = arr[i]
    }
}
console.log(maxNumber)

//////////////////////14//////////////////////

let arr = [1, 5, 10, 21, 4, 6]
minNumber = 100000000;

for (i = 0; i < arr.length; i++) {
    if (minNumber < arr[i]) {

    } else {
        minNumber = arr[i]
    }
}
console.log(minNumber)

//////////////////////15//////////////////////

let arr = [1, 5, 10, 21, 4, 6]
minNumber = 100000000;
maxNumber = 0;
price = 0;

for (i = 0; i < arr.length; i++) {
    if (minNumber < arr[i]) {} else {
        minNumber = arr[i]
    }
    if (maxNumber < arr[i]) {
        maxNumber = arr[i]
    }
}
price = minNumber + maxNumber
console.log(price)

//////////////////////16//////////////////////
//////////////???????????

//////////////////////17//////////////////////

let arr = ["a", "ab", "abc"]
length = "0";

for (i = 0; i < arr.length; i++) {
    if (arr[i] > length) {
        length = arr[i]
    }
}
console.log(length)

//////////////////////18//////////////////////

let arr = ["a", "ab", "abc"]
length = "0";

for (i = 0; i < arr.length; i++) {
    length = length + arr[i]
}
console.log(length)