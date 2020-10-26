/**
 * Chapter 1.6 Exercise
 * Vector Type
 *
 * Write a class Vec that represents a vector in two-dimensional space. It takes x and y parameters (numbers),
 * which it should save to properties of the same name.

 * Give the Vec prototype two methods, plus and minus, that take another vector as a parameter and return a new
 * vector that has the sum or difference of the two vectors’ (this and the parameter) x and y values.

 * Add a getter property length to the prototype that computes the length of the vector—that is, the distance of
 * the point (x, y) from the origin (0, 0).
 *
 * @note vec is being passed as an object , so simply reference the keys for that object in enumeration.
 **/

class Vec {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    plus(vec) {
        return new Vec(this.x + vec.x, this.y + vec.y);
    }

    minus(vec) {
        return new Vec(this.x - vec.x, this.y - vec.y);
    }

    /**
     * Getter property length
     */
    get length() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }


}

//Test pass
//console.log(new Vec(3, 4).length);

//test pass
//console.log(new Vec(1, 2).plus(new Vec(2, 4)));

//test pass
//console.log(new Vec(1, 2).minus(new Vec(2, 4)));