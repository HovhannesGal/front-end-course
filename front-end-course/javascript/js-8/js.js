let arr = [1, 5, 7];

let obj = {
    name: "Hakob", //property => key: value
    age: 45,
}

let user = {
    firstName: "Jack",
    lastName: "Tomson",
    age: 45,

}

let userCopy = user;
ueserCopy.age = 20;
console.log(user.age == 20);

let user1 = {
        firstName: "Sem",
        lastName: "Tomson",
        age: 20,

    }
    //reference type

let car = {
    year: 2016,
    mark: "Mercedes",
    series: "220",
    m: {
        value: 1500,
        Unit: "kg",
    },
    hp: {
        value: 320,
        unit: "n/kg"
    },
    doorCount: 4,
    owners: [
        { name: "jack", from: 2000, to: 2005 },
        { name: "ab", from: 2006, to: 2010 },
        { name: "abc", from: 2010, to: 2015 },
    ],
}