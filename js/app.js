import {results} from"./data.js";

function isEmptyString(str) {
  if (str.length === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isEmptyString(""));
console.log(isEmptyString("Hello"));

function convertToGEL(dollarPrice, exchangeRate){
  return dollarPrice * exchangeRate;
} 
let priceInGEL =convertToGEL(200, 2.6);

console.log(priceInGEL);

function getCountryByCurrency(currencyCode) 
{switch(currencyCode) {
  case "USD":
    return "United States";
  case "EUR":
    return "European Union";
  case "GBP":
    return "United Kingdom";
  default:
    return "Unknown country";
}
}

console.log(getCountryByCurrency("USD"));
console.log(getCountryByCurrency("EUR"));
console.log(getCountryByCurrency("GEL"));
console.log(getCountryByCurrency("GBP"));

function convertToLowerCase(text){
    return text.toLowerCase();
}

console.log(convertToLowerCase("MY NAME IS JOHN"));

function getNumbersOver100(numbers) {
  return numbers.filter(function(number) {
    return number > 100;
  });
}
let result = getNumbersOver100([50, 150, 200, 75, 300]);

console.log(result);


function getCheapestCountry(results) {
    let cheapestCountry = results.reduce ((min,country) => {
        if (country.content.flightQuotes.cheapest.rawPrice < min.content.flightQuotes.cheapest.rawPrice) {
            return country;
        } else {
            return min;
        }
    }
);
    return cheapestCountry.content.location.name;
}

console.log(getCheapestCountry(results));


function findObjectById(results, idValue) {
    return results.find(item => item.id === idValue);
}

const users = [
  {
    id: "user-1",
    name: "Giorgi"
  },
  {
    id: "user-2",
    name: "Nino"
  },
  {
    id: "user-3",
    name: "Tako"
  }
];

console.log(findObjectById(users, "user-2"));