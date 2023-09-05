function asset(x, itsFunction) {
  for (i = 0; i < x; i++) {
    itsFunction();
  }
}

//Export the function to enable visibility outside
module.exports.asset = asset;
