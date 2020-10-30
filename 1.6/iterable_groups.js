/**
 * Chapter 1.6 Exercise
 * Iterable Groups
 */

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
        let group = new Group;

        for (let item of obj) {
            group.add(item);
        }

        return group;
    }

    /**
     * Setup our prototype iterator
     * @return {GroupIterator}
     */
    [Symbol.iterator]() {
        return new GroupIterator(this);
    }

}

/**
 * Custom Iterator
 */

class GroupIterator {
    constructor(set) {
        this.set = Object.values(set);
        this.index = 0;
    }


    next() {
        /**
         * If we have no more items to iterate through , finish the iteration.
         */
        if (this.index >= this.set.length) {
            return {done: true};
        }

        /**
         * Declare our value for output within the iteration
         * @type {string}
         */
        let value = {value: this.set[this.index], done: false};
        this.index++;
        return value;
    }


}

for (let value of Group.from(["a", "b", "c"])) {
    console.log(value);
}