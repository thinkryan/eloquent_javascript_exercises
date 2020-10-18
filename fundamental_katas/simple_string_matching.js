/*&
    Simple String Matching Kata
    Kata url: https://www.codewars.com/kata/5bc052f93f43de7054000188/
    @author Ryan Dennler
 */

/**
 * Solve a, b string matching with asterix wildcards
 * @param a
 * @param b
 */
function solve(a, b) {
    //find the index start and end of asterix based on the string length
    console.log(a.length); // t*t = 3
    console.log(a.indexOf('*')); //1
    console.log(b.length);
    console.log(b.index(2));
}

solve('t*t', 'test'); //should be true