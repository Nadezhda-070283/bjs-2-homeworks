"use strict"

function solveEquation(a, b, c) {
    let arr = [];
    let d = b ** 2 - 4 * a * c;
    if (d > 0) {
        let sq1 = (-b + Math.sqrt(d)) / (2 * a);
        let sq2 = (-b - Math.sqrt(d)) / (2 * a);
        arr.push(sq1, sq2);
    }
    if (d === 0) {
        let sq = -b / (2 * a);
        arr.push(sq);
    }

    return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
    const isNumeric = n => !!Number(n);
    for (let i = 0; i < arguments; i++) {
        if (isNumeric(arguments[i]) == false)

            return false;
    }

    percent /= 100;
    let percentInMonth = percent / 12;
    let bodyAmount = amount - contribution;
    let payment = bodyAmount * (percentInMonth + (percentInMonth / (((1 + percentInMonth) ** countMonths) - 1)));
    let fullPayment = payment * countMonths;

    return +fullPayment.toFixed(2)
}

console.log(calculateTotalMortgage(10, 20000, 20000, 24))
