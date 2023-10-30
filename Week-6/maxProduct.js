const maxProductSubarray = (elements) => {
    let sum = -Infinity;
    for(let i = 0; i < elements.length; i++) {
        let subarraySum = 1;
        for(let j = i; j < elements.length; j++) {
            subarraySum *= elements[j];
        };
    if(sum < subarraySum) sum = subarraySum;
    };
    return sum;
};

const size = 5;
const elements = [2, 3, -2, 4, 5];

// Find maximum product subarray
console.log(maxProductSubarray(elements));;