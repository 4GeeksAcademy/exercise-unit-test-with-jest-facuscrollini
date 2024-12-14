let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound 
    }

function fromDollarToYen(dolar){
    let valor = dolar / oneEuroIs.USD;
    return valor * oneEuroIs.JPY;
}

function fromEuroToDollar(euro){
    return euro * oneEuroIs.USD;
}

function fromYenToPound(yen){
    let valor = yen / oneEuroIs.JPY;
    return valor * oneEuroIs.GBP;
}

function sum(a, b ) {
    return a + b;
}
module.exports = {sum, fromEuroToDollar, fromDollarToYen, fromYenToPound};



