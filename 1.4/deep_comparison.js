/**
 * Deep Comparison
 **/

/**
 * Take 2 values and do a deep comparison
 * @note === comparison or typeof {Value}
 * @param a
 * @param b
 * @return boolean
 */
function deepEqual(a, b) {
    if (typeof a && b === "object" || a !== null || b !== null) {
        if (Object.keys(a).length !== Object.keys(b).length) {
            return false;
        }

        for (const prop in a) {Span
            if (a.prop !== b.prop) {
                return false;
            }
        }
        return true;
    }
}


let obj = {here: {is: "an"}, object: 2};
//let objtwosame = {here: {is: "an"}, object: 2};
let obj2 = {blah: {is: "an", blah: "test"}, object: {blah: "hello"}, objecttwo: {blahtwo: "test"}};

console.log(deepEqual(obj, obj2));

// → true
//console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
//console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true