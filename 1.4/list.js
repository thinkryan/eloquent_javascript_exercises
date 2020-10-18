/** List exercise **/

c = [1, 2, 3];

function toList(array) {
    let list = null;
    for (let i = array.length - 1; i >= 0; i--) {
        list = {value: array[i], rest: list};
    }
    return list;
}

console.log(toList(c));

/**
 * Array 2 list functionality
 * @param arr
 * @returns {{}}
 */
const array2list = function (arr) {
    let list = {};
    let nArray = [];

    for (let n = 0; n <= arr.length - 1; n++) {
        nArray.unshift(arr[n]);
    }

    nArray.forEach(function (element) {
        list = {value: element, rest: list};
    });

    return list;
}

/**
 * List 2 array conversion
 * @param list
 */
const list2array = function (list) {
    let converted = [];
    for (let node = list; node; node = node.rest) {
        converted.push(node.value);
    }

    return converted;
}


/*listObj = toList(c);
console.log(list2array(listObj));*/

console.log(array2list([10, 20, 30]));

/**
 * Prepend Helper
 */
function prepend(value, list) {
    return {value, rest: list};
}

//console.log(prepend(10, prepend(20, null)));

/**
 * n(th)
 * @param list
 * @param n
 */
function nth(list, n) {
    if (!list) return undefined;
    else if (n == 0) return list.value;
    else return nth(list.rest, n - 1);
}

console.log(nth(array2list([10, 20, 30]), 1));