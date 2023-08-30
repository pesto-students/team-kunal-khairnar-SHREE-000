const transpose = (arr, row, col) => {
    let resultArr = [];
    let subarray = [];
    let tempArr = [];
    if(col === row) {
        for(let i = 0; i < row; i++) {
            for(let j = 0; j < row; j++) {
                tempArr.push(arr[i][j]);
            };
        };
        for(let i = 0; i < row; i++) {
            subarray = [];
            for(let j = i; j < tempArr.length; j = j + row) {
                subarray.push(tempArr[j]);
            };
            resultArr.push(subarray);
        };
        return resultArr;
    }
};

console.log(transpose([[12, 43, 35], [44, 65, 74], [14, 25, 26] ], 3, 3));