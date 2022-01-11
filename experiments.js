const variable = "f";

const variable1 = "g"

const timesToRepeat = "50";

let empty = "";

let empty1 = "";

for(let i = 0; i < timesToRepeat; i++) {
 empty += variable
 empty1 += variable1
}

console.log(`${empty} ${empty1}`)