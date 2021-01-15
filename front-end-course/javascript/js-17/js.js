let str = prompt("grir text")
let arr = str.split('')
for (let i = 0; i < arr.length; i++) {
    setTimeout(() => console.log(arr[i]), 1000 * i + 1000)
}