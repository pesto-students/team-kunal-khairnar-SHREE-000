const findNonDuplicate = (arr) => {
    let obj = {};
    for(let i = 0; i < arr.length; i++) {
        if(!obj[arr[i]]) obj[arr[i]] = true;
        else obj[arr[i]] = false;
    };
    for(let x in obj) {
        if(obj[x]) return x;
    }
};

console.log(findNonDuplicate([233, 2, 233, 23, 23, 2, 1]));