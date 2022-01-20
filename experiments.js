const courses = [
 {teacher: "Kyle Simpson", course: "Deep JS Foundations"},
 {teacher: "Brian Holt", course: "Intro to Web Development"},
 {teacher: "Estelle Weyl", course: "CSS In-Depth"},
 {teacher: "Steve Kinney", course: "State Management"},
]

courses.push({teacher: "Sean Larkin", course: "Webpack"})

var spliced = courses.splice(3, 2, {another: "course"});


console.log(courses)

console.log(spliced)