
let idx = -1;
const findIndex = (arr, target) => {
  if (arr.length > 0) {
    let pop = arr.pop();
    if (pop === target) idx = arr.length;
    return findIndex(arr, target);
  } else {
    if (!idx) return -1;
    else return idx;
  }
};

console.log(findIndex([1, 2, 3, 4, 5], 5));