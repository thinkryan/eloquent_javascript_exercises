/**
 * Working with Array object methods
 * Array.map()
 */

/**
 * Array.map()
 * @type {string[]}
 */

let test = [
    'ryan',
    'is',
    'testing',
    'array',
    'functions'
];

/**
 * Creates a new array (newTest) and invokes a callback for every element of the array you are mapping.
 * @type {*[]}
 */
let newTest = test.map(x => x);

//console.log(newTest); //[ 'ryan', 'is', 'testing', 'array', 'functions' ]

/**
 * Let's do some mathematics with
 * We will take each number in an array and get the square value of each item in the array.
 */

numbers = [
    '1',
    '23',
    '6',
    '9',
    '12',
    '1298'
];

let square = numbers.map(x => x * x);
//console.log(square); //[ 1, 529, 36, 81, 144, 1684804 ]

/**
 * Get the square root of each value iterated.
 */

numbers = [
    '1',
    '23',
    '6',
    '9',
    '12',
    '1298'
];

let sqrt = numbers.map(x => Math.sqrt(x));
//console.log(sqrt); //[1, 4.795831523312719, 2.449489742783178, 3, 3.4641016151377544, 36.02776706930364 ]

/**
 *
 */