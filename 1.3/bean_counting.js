/**
 * Bean Counting
 */

/**
 * Count the occurence of letters in a word
 * @param word
 * @param letter
 * @returns {number}
 */
function countChar(word, letter) {
    let counter = 0;
    for (let n = ''; n <= word.length; n++) {
        if (word[n - 1] === letter) {
            counter++;
        }
    }
    return counter;
}

/**
 * Count the occurence of B's in a word
 * @param word
 * @returns {number}
 */
function countBs(word) {
    let counter = 0;
    for (let n = ''; n <= word.length; n++) {
        if (word[n - 1] === 'B') {
            counter++;
        }
    }
    return counter;
}