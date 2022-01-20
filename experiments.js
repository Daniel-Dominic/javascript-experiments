// document.getElementById("text").innerHTML("Hello, World");

let week = [
 "monday",
 "tuesday",
 "wednesday",
 "thrusday",
 "friday",
 "saturday",
 "sunday"
]


for (let i = 0; i < Math.ceil(6.5); i++) {
 console.log(week[i])
}

let string = "hello world!";
let capitalizedString = string[0].toUpperCase() + string.slice(1, 6) + string[6].toUpperCase() + string.slice(7, 12);


console.log(capitalizedString)