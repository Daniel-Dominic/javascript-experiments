// Javascript on DOM

// Changing face mole
const mole = document.getElementById("mole");

let isHungry = true;
let nextTime = Date.now();
function next() {
  if (Date.now() > nextTime) {
    if (isHungry) {
      mole.src = "./mole/mole-sad.png"
    } else {
      mole.src = "./mole/mole-hungry.png"
    } 
    isHungry = !isHungry;
    nextTime += 1000;
  }
  requestAnimationFrame(next)
}
next();
// --------------------------------------------------------------------------------------

// For the boxes on top the page

let box = document.getElementsByClassName('.box-1')
let input = document.querySelector('.color-typer-red')

input.addEventListener("change", function() {
  box.style.backgroundColor = input.value;
});

let box1 = document.querySelector('.box')
var input1 = document.querySelector('.color-typer-blue')

input1.addEventListener("change", function() {
  box1.style.backgroundColor = input1.value;
});

// --------------------------------------------------------------------------------------


// For button alert
document.querySelector('.button-group').addEventListener('click', function(event) {
  alert(`You've clicked ${event.target.innerText}`)
})
// ---------------------------------------------------------------------------------


// For the js modificable text
const tagToChange = document.querySelectorAll('.js-modifiable');
for (let i = 0; i < tagToChange.length; i++) {
  const currentElement = tagToChange[i];
  currentElement.innerText = "This is changed by javascript";
}
// -----------------------------------------------------------------------------------------
function eventEmptyExec() {
if (input.value.length == 0) {
  paragraph.innerText = "Nothing happened here."
  }
}

input = document.querySelector('.type-copier');
const paragraph = document.querySelector('.text-to-copy');

input.addEventListener("keyup", function() {
  paragraph.innerText = input.value;
  eventEmptyExec()
});


// Part of "Js DOM" ---------------------------------------------------------------------------------------------------------------------------------------------

// An array which contains all days of a week
let week = [
 "Monday",
 "Tuesday",
 "Wednesday",
 "Thrusday",
 "Friday",
 "Saturday",
 "Sunday"
]

let result = week.filter(function (week3) {return week3.length > 2});

console.log(result)

for (let i = 0; i < Math.ceil(6.5); i++) {
 console.log(week[i])
}

// let string = "hello, world! i'm daniel.";

// let capitalizedString = string[0].toUpperCase() + string.slice(1, 7) + string[7].toUpperCase() + string.slice(8, 13);

// // let capitalizedString = string[0].toUpperCase() + string.slice(1, 7) + string[7].toUpperCase() + string.slice(8, 15) + string[15].toUpperCase() + string.slice(16, 19) + string[19].toUpperCase() + string.slice(20);


// console.log(capitalizedString)

// const function1 = function() {return 5};
// const function2 = function(hello){return hello}

// console.log(function2(function1()))

// for (let i = 0; i < week.length; i++) {
//  week.push("Unknown Day")
// }




// const items = ['item1', 'item2', 'item3']
// const copyItems = []

// for (let i = 0; i < items.length; i++) {
//  copyItems.push(items[i])
// }
// console.log(copyItems)

// items.forEach(function (whatever) {console.log(whatever)})
// after
// items.forEach(function(item){
//   copyItems.push(item)
// })

// for (let i = 0; i < week.length; i++){
//  console.log(week[i]);
// }
// week.forEach(function (whatever) {console.log(whatever)})

// const newWeek = week.map(function(weeks) {return weeks});
// console.log(newWeek)


// console.log(week[1])

// const array = [0, 1, 2, 3]

// array.reverse().forEach(function (whatever) {console.log(whatever)})

function crossAdd(input) {
 var answer = [];
 for (var i = 0; i < input.length; i++) {
   var goingUp = input[i];
   var goingDown = input[input.length - 1 - i];
   answer.push(goingDown + goingUp);
 }
 return answer;
}

console.log(crossAdd("10110"));

function find(needle, haystack) {
 for (var i = 0; i < haystack.length; i++) {
   if (haystack[i] === needle) {
    return true;

   }
 }
}

console.log(find("12", "10000000"))
// var hello = [];
// function addString(str1, str2) {
//  return hello.push(str1 + str2)
// }

// addString("F", "G");

// console.log(hello);

var primeNumbers = [1, 3, 2, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

console.log(primeNumbers.sort(function addFive(a, b) {
return a - b}));

var strings = "this is an array of strings";
// var hell = strings.map((string) => string.toUpperCase()).sort();
// console.log(hell);

result = strings.split(" ").map((string) => string.toUpperCase()).filter(strings => strings != 'I').join(" ");

console.log(result)


var x = "this is some string";

console.log(x.split(" ").map((string) => string.toUpperCase()).filter((string) => string !== 'I').join(" || "));


x = 5;

const z = 11;

const y = 10;

var isTrue = true;
var someThingElse = true;

if ((x === y && x === y) || isTrue) {
  console.log("This is true")
} else {
console.log("this isn't true")
}

if (x === y ) {
  console.log("same")
} else {
  console.log("not same")
}


const sentance = "I think this is a test which we are gonna fail";

const word = "think"

const includesSentance = `The word "${word}" ${sentance.includes(word) ? "is" : "isn't"} in the sentance`

console.log(includesSentance)

var arr = [3, 6, 2, 56, 32, 5, 89, 32];
var largest = arr[2];

for (var i = 0; i < arr.length; i++) {
    if (largest < arr[i] ) {
        largest = arr[i];
    }
}
console.log(largest);

// heavy untested code ahead
// let string = "hello world!";
// let splitStr = string.split(" ");
// console.log(splitStr[1]) 
// for (let i = 0; i < splitStr.length; i++) {
//   splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
//   console.log(splitStr.substring(1))
// }
// let capitalizedString = splitStr.join(" ");

// console.log(capitalizedString)

var array1 = [1, 2, 3]

for (let i = 0; i < array1.length; i++) {
  console.log(array1[i] * 2)
}