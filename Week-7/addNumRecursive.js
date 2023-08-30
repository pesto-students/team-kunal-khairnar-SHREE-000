let sum = 0;
const addNum = (arr) => {
  if(arr.length > 0) {
    sum += arr.pop();
    return addNum(arr);
  } else return sum;
};

console.log(addNum([5, 4, 1, 2]));
