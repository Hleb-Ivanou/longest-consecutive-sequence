module.exports = function longestConsecutiveLength(array) {
  var hash = new Map();
  var element = 0;
  var count = 0;
  var result = 0;

  for (let i = 0; i < array.length; i++) {
    hash.set(array[i]);
  }

  for (let i = 0; i < array.length; i++) {
    if ( !hash.has(array[i] - 1) ) {
      element = array[i];
      while ( hash.has(element) ) {
        element++;
      }
      if (result < element - array[i]) {
        result = element - array[i];
      }
    }
  }

  return result
}
