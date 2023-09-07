// create a class Square that inherits from Square in 5-square.js
//imported Square from "5-square.js"
const newSquare = require("./5-square");

class Square extends newSquare {
  constructor(size) {
    super(size, size);
  }

  //this will print the 'c' character
  charPrint(c) {
    if (c === undefined) {
      c = "X";
      for (let i = 0; i < this.height; i++) {
        let row = "";
        for (let j = 0; j < this.width; j++) {
          row += `${c}`;
        }
      }
    }
  }
}

// create a module for export
module.exports = Square;
