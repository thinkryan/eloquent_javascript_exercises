/*
 Write a program that creates a string that represents an 8×8 grid, using newline
 characters to separate lines. At each position of the grid there is either a space
 or a "#" character. The characters should form a chessboard.

 Passing this string to console.log should show something like this:
 */

let pattern = "";
let size = 8;

//define horizontal chessboard
for (let nh = 0; nh < size; nh++) {
    //define vertical chessboard
    for (let nv = 0; nv < size; nv++) {
        //use a shorthand conditional and append to pattern with one line of code
        pattern += (nv + nh) % 2 === 0 ? " " : "#";
    }
    pattern += "\n";
}

console.log(pattern);
