function asset(x, itsFunction) {
  for (i = 0; i < x.length; i++) {
    itsFunction();
  }
}

//Export the function to enable visibility outside
module.exports.asset = asset;
