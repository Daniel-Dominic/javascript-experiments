const me = {
 name: {
  first: "Daniel",
  last: "Dominic"
 },
 location: {
  streetNumber: 500,
  street: "Fakestreet",
  city: "Seattle",
  state: "WA",
  zipCode: 5555,
  country: "USA"
 },
 getAddress(){
  return `${this.name.first } ${this.name.last} ${this.location.streetNumber} ${this.location.street}
  ${this.location.city}, ${this.location.state} ${this.location.zipCode}
  ${this.location.country}`
 }
}

// setTimeout(me.name.middle.toUpperCase(), 3000) 

console.log(me.getAddress())

console.log(window.scrollY)
