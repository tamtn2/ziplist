function ziplist(arr1, arr2) {
  const empArr = [];
  for (let i = 0; i < arr1.length; i++) {
    empArr.push(arr1[i]);
    empArr.push(arr2[i]);
  }
  return empArr;
}

function zipListTheSimpleWay(arr1, arr2) {
  return _.flatten(_.zip(arr1, arr2));
}

console.log(ziplist(['a', 'b', 'c'], [1, 2, 3]));
console.log(zipListTheSimpleWay(['a', 'b', 'c'], [1, 2, 3]));
