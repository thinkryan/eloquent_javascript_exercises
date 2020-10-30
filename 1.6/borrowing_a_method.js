/**
 * Borrowing A Method Exercise
 */

/**
 * hasOwnProperty is a robust way to check if a map has that property, but what if you define "hasOwnProperty"
 * The prototype method would then be overwritten by the definition.
 *
 * How can we call the hasOwnProperty on an object that has its own property name?
 */

let map = {one: "one", two: "two", hasOwnProperty: true};

/**
 * Solution #1
 */
//console.log(({}).hasOwnProperty.call(map, "one"));

/**
 * Solution #2
 */
console.log(Object.prototype.hasOwnProperty.call(map, "three"));

/**
 Solution Description: You can invoke another Object's hasOwnProperty and call it with this set to the object you'd
 like to call it on. (this)

 Solution #1: Copies the object with the argArray value and performs the method call on a new prototype.
 Solution #2: Doesn't create a new object.

 @reference https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty
 */