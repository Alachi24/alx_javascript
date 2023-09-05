function callMeMoby(x, itsFunction) {
  for (let i = 0; i < x; i++) {
    itsFunction();
  }
}

//Export the function to enable visibility outside
module.exports.callMeMoby = callMeMoby;
