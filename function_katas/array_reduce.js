/**
 * Working with Array.reduce()
 */

/**
 * Quick understanding , running through a series of integers inside of an array to reduce them down
 * @type {number[]}
 */
let arr = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

console.log(arr.reduce(reducer)); //10

/**
 * Let's generate the total sales for the day based on an array of float values.
 * @type {number[]}
 */

let sales = [3.99, 1.99, 49.99, 52.99, 120, 39.99, 12.99, 10.99, 0.99];
console.log(sales.reduce(reducer)); //293.92

/**
 * Let's return the average of the above's daily earnings.
 * We will also round the values out from an integer.
 */
let dailySales = [3.99, 1.99, 49.99, 52.99, 120, 39.99, 12.99, 10.99, 0.99];
const average = dailySales.reduce((total, amount, index, array) => {
    total += amount;
    if (index === array.length - 1) {
        return Math.round(total / array.length);
    } else {
        return Math.round(total);
    }
});

console.log(average); //32.6577777777