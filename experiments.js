const str = "F";

const string = "G";

function addString(str, string){
 return str + string
}

let timesToRepeat = 50;

let empty = '';

for (let i = 0; i < timesToRepeat; i++) {
 empty += addString(str, string)
}

if ("FGFGFGFGFGFGFGFGFGFGFGFGFGFGFGFGFGFGFGFGFGFGFGFGFGFGFGFGFGFGFGFGFGFGFGFGFGFGFGFGFGFGFGFGFGFGFGFGFGFG" === empty) {
 console.log("working")
} else {
 console.log("Notworking")
}

console.log(empty)