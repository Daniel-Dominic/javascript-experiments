let homeCountry = "India";
let homeState = "Kerala";
let homeCity = "Kochi";

function homeSentance(city, state, country) {
  return `I'm from ${country}, ${state}, ${city}. India is awesome.`; 
}

homeCountry = "USA";
homeState = "California";
homeCity = "San Francisco";

console.log(homeSentance(homeCity, homeState, homeCountry))