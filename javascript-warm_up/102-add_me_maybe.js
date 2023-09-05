function addMeMaybe(number, theFunction) {
  newNumber = number + 1;
  theFunction(newNumber);
}

module.exports.addMeMaybe = addMeMaybe;
