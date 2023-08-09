function maxProductSubarray(nums) {
    if (nums.length === 0) {
        return [0, []]; // No elements, so maximum product is 0
    }
    
    let maxEndingHere = nums[0];
    let minEndingHere = nums[0];
    let maxSoFar = nums[0];
    let maxSubarrayStartIndex = 0;
    let maxSubarrayEndIndex = 0;
    let currentStartIndex = 0;

    for (let i = 1; i < nums.length; i++) {
        const temp = maxEndingHere;
        maxEndingHere = Math.max(nums[i], nums[i] * maxEndingHere, nums[i] * minEndingHere);
        minEndingHere = Math.min(nums[i], nums[i] * temp, nums[i] * minEndingHere);

        if (maxEndingHere > maxSoFar) {
            maxSoFar = maxEndingHere;
            maxSubarrayStartIndex = currentStartIndex;
            maxSubarrayEndIndex = i;
        }

        if (maxEndingHere <= 0) {
            currentStartIndex = i + 1;
        }
    }

    return [maxSoFar, nums.slice(maxSubarrayStartIndex, maxSubarrayEndIndex + 1)];
}

// Example input
const size = 5;
const elements = [2, 3, -2, 4, 5];

// Find maximum product subarray
const [maxProduct, maxProductSubarrayElements] = maxProductSubarray(elements);

console.log("Maximum Product:", maxProduct);
console.log("Subarray Elements:", maxProductSubarrayElements);
