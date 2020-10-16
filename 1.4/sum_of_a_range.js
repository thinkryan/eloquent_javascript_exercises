/**
 * Get the range of 2 values
 * @param start
 * @param end
 */

function range(start, end) {
    let n = 0, nRange = [];
    if (start === end) {
        return start;
    }
    if (start < end) {
        for (n = start; n <= end; n++) {
            nRange.push(n);
        }
    } else {
        for (n = start; n >= end; n--) {
            nRange.push(n);
        }
    }

    return nRange;
}

let numbers = [];
const sum = function (numbers) {
    /**
     * Setup a reduce to add the accumulator with the currentValue
     * @param accumulator
     * @param currentValue
     * @returns {*}
     */
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    return numbers.reduce(reducer);
};

console.log(sum(range(5, 10)));