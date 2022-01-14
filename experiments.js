let something = "outside the function"
let somethingElse;
function thing() {
  let something = "outside";
if (true){
  let something = "inside";
  console.log(something)
}
console.log(something)
somethingElse = "defined now";
}

thing()
console.log(somethingElse)
console.log(something)