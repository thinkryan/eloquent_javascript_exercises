/*
Fizzbuzz Homework
 */

/**
 * Homework solution
 * @author Ryan Dennler
 * Not the most elegant solution, but it works.
 *
 * Takeaways from this piece is that I need to learn how to refactor my code to smaller pieces using shorthands
 * and better conditional models.
 *
 * Another aspect is number = number + 1 should be number++
 */
for (let number = 0; number <= 100; number = number + 1) {
    //Clear output at the top of our loop
    let output = "";
    if (number % 3 === 0 && number % 5 === 0) {
        output += 'FizzBuzz';
        console.log(output);
    } else if (number % 3 === 0) {
        output += 'Fizz';
        console.log(output);
    } else if (number % 5 === 0) {
        output += 'Buzz';
        console.log(output);
    } else {
        console.log(number);
    }
}