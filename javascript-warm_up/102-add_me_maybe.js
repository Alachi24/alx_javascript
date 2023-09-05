function addMeMaybe(number, theFunction) {
  newNumber = number++;
  theFunction(newNumber);
}

module.exports.addMeMaybe = addMeMaybe;
