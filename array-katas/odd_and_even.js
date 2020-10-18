/**
 Slice Examples For Practice
 **/

/** Exercise 1: Split an array into 2 arrays of numbers containing odd and even values **/

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/**
 * Horrible naming convention for function, I know :P
 * @param n
 */
const oAnde = function (n) {
    let odd = [];
    let even = [];
    let results = {};

    for (i = 0; i <= n.length; i++) {
        if (n[i] % 2 == 0) {
            even.push(n[i]);
        } else if (n[i] % 2 == 1) {
            odd.push(n[i]);
        }
    }

    results.odd = odd;
    results.even = even;

    return results;
}

console.log(oAnde(numbers));