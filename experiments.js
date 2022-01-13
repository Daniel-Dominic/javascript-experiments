let homeCountry = "India";
let homeState = "Kerala";
let homeCity = "Kochi";

function homeSentance(city, state, country) {
  let home = `I'm from ${country}, ${state}, ${city}. India is awesome.`;
  return home; 
}

homeCountry = "USA";
homeState = "California";
homeCity = "San Francisco";

console.log(homeSentance(homeCity, homeState, homeCountry))