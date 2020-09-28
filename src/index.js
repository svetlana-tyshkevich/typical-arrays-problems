
exports.min = function min (array) {
  if (array && array.length > 0) {
    return Math.min.apply(0, array);
  }
  else return 0;
  
}

exports.max = function max (array) {
  if (array && array.length > 0) {
    return Math.max.apply(0, array);
  }
  else return 0;
}

exports.avg = function avg (array) {
  if (array && array.length > 0) {
    return array.reduce((a, b) => a + b, 0) / array.length
  }
   else return 0;
}
