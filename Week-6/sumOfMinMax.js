const sumMinMax = (arr) => {
    let min = Infinity;
    let max = -Infinity;
    for(let i = 0; i < arr.length; i++) {
        if(min > arr[i]) min = arr[i];
        if(max < arr[i]) max = arr[i];
    }
    return (min + max);
};

console.log(sumMinMax([23, 54, 23, 100, 25, 1]));