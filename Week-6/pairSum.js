const pairSum = (arr, sum) => {
    let resultArr = [];
    for(let i = 0; i < arr.length - 1; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            if(arr[i] + arr[j] === sum) resultArr.push([arr[i], arr[j]]);
        }
    }
    return resultArr;
};

console.log(pairSum([1, 5, 22, 3, 543, 3, 6, 2, 4], 6));