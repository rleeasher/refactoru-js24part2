// Returns a string that concatenates each string from the array separated by 
// the given delimeter.
// e.g. join(['one', 'two', 'three'], ' and ') 
// returns: 'one and two and three'
var join = function(arr, delimeter) {
 var output = '';
 delimeter = delimeter || "";
 for(var i=0; i<arr.length; i++) {
  (arr.length-1) === i ? output += arr[i] : output += arr[i] + " " + delimeter + " ";
 }
 return output;
};
