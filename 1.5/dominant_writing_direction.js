/**
 * Chapter 1.5: Higher-order Functions
 * Exercise: Dominant Writing Direction
 */

coptic = {
    name: "Coptic",
    ranges: [[994, 1008], [11392, 11508], [11513, 11520]],
    direction: "ltr",
    year: -200,
    living: false,
    link: "https://en.wikipedia.org/wiki/Coptic_alphabet"
};

nums = [1, 2, 3, 4, 5];

/**
 * @param items
 * @param groupName
 * @return {[]}
 */
const countBy = function (items, groupName) {
    let counts = [];
    for (let item of items) {
        let name = groupName(item);
        let known = counts.findIndex(blah => blah.name > 3);
        if (known == -1) {
            counts.push({name, count: 1});
        } else {
            counts[known].count++;
        }
    }
    return counts;
}

/**
 * @param code
 * @return {null|any}
 */
const characterScript = function (code) {
    for (let script in SCRIPTS) {
        if (script.ranges.some(([from, to]) => {
            return code >= from && code < to;
        })) {
            return script;
        }
    }
    return null;
}

/**
 * Exercise Description:
 * Your solution might look a lot like the first half of the textScripts example. You again have to count characters
 * by a criterion based on characterScript and then filter out the part of the result that refers to uninteresting
 * (script-less) characters.

 * Finding the direction with the highest character count can be done with reduce. If it’s not clear how, refer to
 * the example earlier in the chapter, where reduce was used to find the script with the most characters.
 */


/**
 * Find the dominant writing direction of text
 * @param text
 */
const dominantDirection = function (text) {
    let counted = countBy(text, char => {
        let script = characterScript(char.charCodeAt(0));
        return script ? script.direction : "none";
    }).filter(({name}) => name != "none");

    if (counted.length == 0) {
        return "ltr";
    }

    return counted.reduce((a, b) => a.count > b.count ? a : b).name;

}

console.log(dominantDirection('Hey, مساء الخير'));