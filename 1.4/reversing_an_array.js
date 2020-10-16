/**
 Eloquent Javascript Homework 1.4
 Reversing An Array
 **/

let arr = ['1', '2', '3'];
/**
 * Reverse am array
 * @param arr
 * @returns {[]}
 */
const arrayR = function (arr) {
    let newArray = [];
    for (let n = 0; n <= arr.length - 1; n++) {
        newArray.unshift(arr[n]);
    }

    return newArray;
}

/*console.log(arrayR(arr));*/

arrTwo = ['ryan', 34, 'web developer', 'working out', 'fitness', 'javascript'];

/**
 * Reverse an array in place
 * @param theArray
 */
const arrayRIP = function (theArray) {
    for (let i = 0; i < Math.floor(theArray.length / 2); i++) {
        //console.log(i);
        /** Contains 1st three values in the loop under old to reference later
         * Important to note it stores 1 value each loop this is why Math.floor / 2 is used.
         * **/
        let old = theArray[i];
        /** - 1 - i on the theArray.length
         * 6 - 1 - i each time (1st iteration is 6 - 1 - 0
         * then 6 - 1 - 1 (4) , 6 - 1 - 2 (3), 6 - 1 - 3 (2)
         */
        theArray[i] = theArray[theArray.length - 1 - i];
        /** Reference old and put it back
         * Go back to the end of the array, and plug back in our old copied values
         **/
        theArray[theArray.length - 1 - i] = old;
    }
    return theArray;
}

/*console.log(arrayRIP(arrTwo));*/
