console.log("hello")
let i = 0;

while (i <= 5) {
    console.log(i++)
    console.log(++i)
}


//////////////////////1//////////////////////

let gumar = +prompt("grir tiv")
let j = 0

for (let i = 0; i <= gumar; i++) {
    if (i % 2 === 0) {
        j = j + i;

    }
}
alert(j)

//////////////////////2//////////////////////

let gumar = +prompt("grir tiv")
let j = 0

for (let i = 0; i <= gumar; i++) {
    if (i % 2 === 1) {
        j = j + i;

    }
}
alert(j)

//////////////////////3//////////////////////

let gumar = +prompt("grir tiv")
let j = 0

for (let i = 0; i < gumar; i++) {
    if (i % 3 === 1) {
        j = j + i;

    }
}
j = j - 1;
alert(j)

//////////////////////4//////////////////////

let gumar = +prompt("grir tiv")
let j = 0

for (let i = 0; i < gumar; i++) {
    if (i % 7 === 0) {
        j++;

    }
}
j = j - 1;
alert(j)

//////////////////////5//////////////////////

let gumar = +prompt("grir tiv")
let j = 0

for (let i = 0; i < gumar; i++) {
    if (i % 2 === 0) {
        j++;

    }
}

alert(j)

//////////////////////6//////////////////////

let gumar = +prompt("grir tiv")
let j = 1

for (let i = 0; i < gumar; i++) {
    if (i % 2 === 1) {
        j = j * i;

    }
}

alert(j)

//////////////////////7//////////////////////

let i = +prompt("grir tiv");

for (;;) {
    if (i < 1) break;
    console.log(i);
    i--;
}

//////////////////////8//////////////////////

let i = +prompt("grir tiv");

for (;;) {
    if (i <= 9) {
        console.log("");
    } else {
        if (i >= 10) {
            console.log("");
        }
    }

}