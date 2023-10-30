const interSectingElem = (arr1, arr2) => {
    let obj = {};
    let resultArr = [];
    for (let i = 0; i < (arr1.length); i++) {
        obj[arr1[i]] = 1; 
    }
    for (let i = 0; i < arr2.length; i++) {
        if(!obj[arr2[i]]) obj[arr2[i]] = 1;
        else obj[arr2[i]] += 1;
    }
    for(let x in obj) {
        if(obj[x] > 1) resultArr.push(x);
    }
    return resultArr;
};

console.log(interSectingElem([3, 543, 23, 5, 2], [2, 5, 2, 66, 75, 3]));