function rotateArray(arr, k) {
  const remainder = k % arr.length;
  const offset = arr.length - remainder;
  if (remainder == 0) return arr 
  return [...arr.slice(offset), ...arr.slice(0,offset)]
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [4, 1, 2, 3]");
  console.log("=>", rotateArray([1, 2, 3, 4], 1));

  console.log("");

  console.log("Expecting: [2, 3, 1]");
  console.log("=>", rotateArray([1, 2, 3], 2));

  console.log("");

  console.log("Expecting: [1, 2, 3]");
  console.log("=>", rotateArray([1, 2, 3], 3));

  console.log("Expecting: [1, 2, 3]");
  console.log("=>", rotateArray([1, 2, 3], 6));
}

module.exports = rotateArray;

// Please add your pseudocode to this file
// And a written explanation of your solution
