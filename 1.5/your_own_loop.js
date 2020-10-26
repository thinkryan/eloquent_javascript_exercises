/**
 * Chapter 1.5: High-order Functions
 * Exercise 2: Your Own Loop
 * @author Ryan Dennler
 */

/**
 * Your Own Loop
 * @description Takes a loop: Test function, update function, body function.
 * @param l
 * @param tf
 * @param uf
 * @param bf
 */
const yourLoop = function (l, tf, uf, bf) {
    for (let i = l; tf(i); i = uf(i)) {
        bf(i);
    }
}

console.log(yourLoop(3, n => n > 0, n => n - 1, console.log));
/**
 * Steps:
 * 1. i = start value
 * 2. tf(i) = test function that evaluates a truthy or falsy return , on false the loop stops
 * 3. uf(i) = updates the start value to n - 1 ( -1 off each iteration )
 * 4. bf(i) = console.log() , console logs the output in each loop
 * 5. Finishes once tf(i) reaches 0
 */

const secondLoop = function () {

}