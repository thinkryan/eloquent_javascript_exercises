/**
 * Chapter 1.6 Exercise
 * Groups
 *
 * The standard JavaScript environment provides another data structure called Set. Like an instance of Map, a set
 * holds a collection of values. Unlike Map, it does not associate other values with those—it just tracks which values
 * are part of the set. A value can be part of a set only once—adding it again doesn’t have any effect.
 *
 * Write a class called Group (since Set is already taken). Like Set, it has add, delete, and has methods. Its
 * constructor creates an empty group, add adds a value to the group (but only if it isn’t already a member), delete
 * removes its argument from the group (if it was a member), and has returns a Boolean value indicating whether its
 * argument is a member of the group.
 *
 * Use the === operator, or something equivalent such as indexOf, to determine whether two values are the same.
 *
 * Give the class a static from method that takes an iterable object as argument and creates a group that contains
 * all the values produced by iterating over it.
 * */

class Group {
    /**
     * Construct our Group object
     */
    constructor() {
        this.set = [];
    }

    /**
     * Add a value to an array
     * @param value
     */
    add(value) {
        if (!this.has(value)) {
            this.set.push(value);
        }
    }

    /**
     * Delete a value from an array
     * @param val
     * @return {*[]}
     */
    delete(val) {
        return this.set = this.set.filter(str => str != val);
    }

    /**
     * Check if the array has the value
     * @param val
     */
    has(val) {
        return this.set.includes(val);
    }

    /**
     * Create a new Group from an object
     * @param obj
     */
    static from(obj) {
        const group = new Group;

        for (let item of obj) {
            group.add(item);
        }

        return group;
    }

}