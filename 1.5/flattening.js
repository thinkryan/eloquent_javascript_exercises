/**
 * Chapter 1.5: High-order Functions
 * Exercise 1: Flattening
 * @author Ryan Dennler
 */

let arrays = [[1, 2, 3], [4, 5], [6]];

/**
 * Flatten an array
 * @param ar
 */
const flatten = function (ar) {
    const reducer = (acc, item) => acc.concat(item);
    return ar.reduce(reducer, []);
}

console.log(flatten(arrays));