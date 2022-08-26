function myMap(inputArray, callback) {
  // Your code here
  const res = [];
  inputArray.forEach(elem => {
    res.push(callback(elem));
  });
  return res;
}

module.exports = myMap;
