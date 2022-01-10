function addString(string1, string2) {
 return string1 + string2
}

const timesToRepeat = 50;

let empty = '';

for (let i = 0; i < timesToRepeat; i++) {
 empty += addString("f", "f")
}

console.log(empty)