/**
 * Codewars Kata Exercise
 * Take a string, and reverse every word inside of it that has 5 or more characters
 * Input: string
 * Output: String with words that have 5 or more .length() reversed
 */

function spinWords(stringy) {
    let finishedResults = [];
    let ar = [];

    ar = stringy.split(' ');
    for (let i = 0; i < ar.length; i++) {
        if (ar[i].length == 5 || ar[i].length > 5) {
            let reverseArray = [];
            let reverseString;
            reverseArray = ar[i].split('')
                .reverse()
                .join('')
                .toString();
            finishedResults.push(reverseArray);
        } else {
            finishedResults.push(ar[i]);
        }
    }

    return finishedResults.join(' ');
}

console.log(spinWords("Welcome to the doghouse"));