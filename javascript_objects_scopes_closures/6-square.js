// create a class Square that inherits from Square in 5-square.js
//imported Square from "5-square.js"
const square = require("./5-square");

class Square extends square {
  constructor(size) {
    super(size, size);
  }

  //this will print the 'c' character
  charPrint(C) {
    for (let i = 0; i < this.height; i++) {
      let row = "";
      for (let j = 0; j < this.width; j++) {
        row += `${C}`;
      }
    }
  }
}

// create a module for export
module.exports = Square;
