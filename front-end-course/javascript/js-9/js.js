let k = 0

let obj = {
    firstName: "Hov",
    lastName: "Gal",
    age: 19,

}

for (let key in obj) {
    if (typeof obj[key] == "object") {
        k = k + 1
    } else {

    }

    console.log(k)
}

//////////////////////2//////////////////////

let obj = {
    firstName: "Jack",
    lastName: "Parker",
    age: 48,
    job: "programmer",
}
const arr = [];
for (let key in obj) {
    arr.push([key, obj[key]])

    console.log(arr)
}
//////////////////////3//////////////////////

let k = 0

let obj = {
    firstName: "Hov",
    lastName: "Gal",
    age: 19,

}

for (let key in obj) {
    k += 1
}
console.log(k)

//////////////////////4//////////////////////

let obj = {
    firstName: "Artur",
    lastName: "Kazanchyan",
    age: 21,
}
let k = 0;

for (let key in obj) {
    if (typeof obj[key] === "string") {
        k += 1;
    }
}
console.log(k)

//////////////////////5-6//////////////////////

let arr = [{
        date: 2009,
        title: "The Road Ahead",
        author: "Bill Gates",

    },
    {
        date: 2015,
        title: "Walter Isaacson",
        author: "Steve Jobs",

    },
    {
        date: 2007,
        title: "Mockingjay: The Final Book of The Hunger Games",
        author: "Suzanne Collins",

    },
];

for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length - i - 1; j++) {
        if (arr[j].date > arr[j + 1].date) {
            let temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
        }
    }
}
console.log(arr);


function sumOfArray(arr) {

    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    console.log(sum)

}

sumOfArray(someArr)







let someArr = [1, 5, 7, 4]

function evenCount(arr) {
    let count = 0;
    for (let el of arr) {
        el % 2 === 0 && ++count;
    }
    return count
}
let result = evenCount(someArr)