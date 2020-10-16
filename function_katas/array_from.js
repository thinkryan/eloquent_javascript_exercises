/**
 * Working with: Array.from()
 */

/**
 * Not much of a use case but Array.from() with an existing array
 */

numbers = [
    '1',
    '6',
    '139',
    '18',
    '24'
];

let newArr = Array.from(numbers, x => x + ".");
console.log(newArr); //[ '1.', '6.', '139.', '18.', '24.' ]

/**
 * Now let's work with a string
 */

let ryan = "ryan";

let arrayFromRyan = Array.from(ryan, x => x + '.');
console.log(arrayFromRyan); //[ 'r.', 'y.', 'a.', 'n.' ]

