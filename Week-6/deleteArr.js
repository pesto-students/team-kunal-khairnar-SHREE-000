const deleteArr = (...arr) => {
    let resultArr = [];
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] % 3 === 0 || arr[i] % 2 === 0) continue;
        else resultArr.push(arr[i]);
    }
    return resultArr;
};

console.log(deleteArr(1,2,3,4,5,6,7,8,9));;