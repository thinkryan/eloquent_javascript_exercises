/**
 * Recursion Homework
 */

/**
 * Check if an integer is even
 * @param value
 * @returns {boolean}
 */
function isEven(value) {
    if (value < 0) return false;
    if (value % 2 === 0) {
        return true;
    } else if (value % 2 === 1) {
        return false;
    }
}

console.log(isEven(-1));