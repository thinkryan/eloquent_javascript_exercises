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

console.log(({}).hasOwnProperty.call(map, "one"));

/**
 Solution Description: You can invoke another Object's hasOwnProperty and call it with this set to the object you'd
 like to call it on. (this)

 @todo Look into if this copies the original object into another one with just that value and performs the method call.
 @todo i think another way is to Object.prototype.hasOwnProperty.call(foo, 'bar');

 @reference url: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty
 */