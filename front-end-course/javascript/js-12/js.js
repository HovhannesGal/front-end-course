let n = prompt("grir zangvaci tarrery");
let arr = n.split(' ');

function middle() {
    let i = 0;
    let k = 0;
    let l = 0;
    for (i = 0; i < arr.length; i++) {
        if (arr.lenght % 2 !== 1) {
            k = (arr.lenght - 1) / 2

        }

    }

}

console.log(middle(n) - 1)


//////////////////////////////////////////////////////

let n = prompt("grir zangvaci tarrery");
let arr = n.split(' ');

function mecpoqr()
let max = 0;
min = Infinity; {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
        }

    }
}

let getMax = (arr) => {
    let max = 0;

    for (let i = 0; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i]
        }
    }
    return max
}
getMax([4, 3, 8, 15, 9, 7, 6])


//////////////////////////4////////////////////////////

let n = +prompt("grir 1 eji erkarutyuny");
let k = +prompt("grir 2 eji erkarutyuny");


function erankyanNerqnadziq(n, k) {
    const c = n ** 2 + k ** 2
    return Math.sqrt(c);

}


function erankyanMakeres(n, k) {
    if (n > k) {
        let a = n / 2
    } else {
        a = k / 2
    }

    const s = Math.sqrt(c) * a / 2
}



erankyanNerqnadziq(n, k)
erankyanMakeres(n, k, a)

//////////////////////////5////////////////////////////

let n = +prompt("grir varkyanneri qanaky")

function jameriVeracum(n) {


    let k = 3600 //3600
    k = n / k
    return Math.trunc(k)

}
jameriVeracum(n)


//////////////////////////6////////////////////////////

//////////////////////////7////////////////////////////

let tiv = [4, 2, 5, 1, 3];
tiv.sort(function(a, b) {
    return a - b;
});