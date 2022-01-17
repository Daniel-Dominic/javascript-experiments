const [vari1, vari2] = ["F", "G"]

const timesToRepeat = 25;

let [empty, empty1] =  ['', ''];

for (let i = 0; i < timesToRepeat; i++) {
 empty += vari1;
 empty1 += vari2;
}

function addString(str1, str2) {
 return str1 + str2
}

console.log(addString(empty, empty1));