/**
 * Chapter 1.5 Higher-order Functions
 * Exercise: Everything
 **/

t = [1, 2, 3, 8, 5]
//n => n < 10

const every = function (array, test) {
    for (let i = 0; i < array.length; i++) {
        if (!test(array[i])) {
            return false;
        }
    }

    return true;
}

//console.log(every(t, n => n < 10));

/**
 * Take an array and predicate function, return boolean based on predicate function operation
 * @param array
 * @param test
 */
const some = function (array, test) {
    return array.some(test);
}

//console.log(some(t, n => n < 10));