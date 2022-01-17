const person1 = {
 firstName: "Daniel",
 lastName: "Dominic",
 ageRange: "25-35"
};

const person2 = {
 firstName: "Jack",
 lastName: "Dewell",
 ageRange: "55-65"
}

const person3 = {
 ageRange: "12-13"
}

function suggestMusic(person) {
if (person.ageRange == "25-35") {
 console.log("We guess you will like Draft Punk you crazy millennial.")
} else if (person.ageRange == "55-65") {
 console.log("We guess you will like Johnny Cash. He Walks the line.") 
} else {
 console.log("Maybe recommend Ylona Garcia? Everyone likes her right?")
}
}

console.log(suggestMusic(person1))
console.log(suggestMusic(person2))
console.log(suggestMusic(person3))