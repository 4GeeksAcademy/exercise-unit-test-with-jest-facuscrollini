// Importar la función sum del archivo app.js


test("One euro should be 1.07 dollars", function() {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');
    
    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);
    
    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;
    
    // Hago mi comparación (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})

test("One dollar should be 146.26 yens", function() {
    const {fromDollarToYen} =require('./app.js');

    expect(fromDollarToYen(50.5)).toBe(7386.214953271028)

})

test("One Yen should be 136.155 pounds", function() {
    const {fromYenToPound} = require('./app.js');
    expect(fromYenToPound(9.5)).toBe(0.052811501597444084);
})

test("adds 14 + 9 to equal 23", ()=> {
    const { sum } = require('./app.js');
    expect(sum(14,9)).toBe(23);
})