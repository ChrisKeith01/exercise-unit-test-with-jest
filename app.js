// We declare the function with the exact name "fromEuroToDollar"



// Export the function to be used on other files 
// (similar to the keyword "export" when using webpack)
// Conversion rates
//One eoro is:
let oneEuroIs = {
    "JPY": 156.5, // Japanese yen
    "USD": 1.07, // US dollar
    "GBP": 0.87, // British pound
}

const fromEuroToDollar = function(valueInEuro) {
    // Convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.07;
    // return the dollar value
    return valueInDollar;
}
const fromYenToPound = function(valueInYen) {
    
    let valueInPound = valueInYen * 0.87;
    // return the dollar value
    return valueInPound;
}

const fromDollartoYen = function(valueInDollar) {
    // Convert the given valueInEuro to dollars
    let valueInYen = valueInDollar * 156.5;
    // return the dollar value
    return valueInYen;
}
// Example sum function (if it exists)
function sum(a, b) {
    return a + b;
}





// Export the function


// We include fromEuroToDollar here as well because it needs to be exported
module.exports = { sum, fromEuroToDollar, fromYenToPound, fromDollartoYen};
