function callMeMoby(x, itsFunction) {
  for (let i = 0; i < x; i++) {
    console.log(itsFunction[i]);
  }
}

//Export the function to enable visibility outside
module.exports.callMeMoby = callMeMoby;
