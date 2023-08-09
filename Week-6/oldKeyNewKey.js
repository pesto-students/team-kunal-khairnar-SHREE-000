const oldKeyNewKey = (arr, old, current) => {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === old) arr.splice(i, 1, current);
    };
    return arr;
};

console.log(oldKeyNewKey([3, 5, 67, 3, 6, 3, 1], 3, 9));