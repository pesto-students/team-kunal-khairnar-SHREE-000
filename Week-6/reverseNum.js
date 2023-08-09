const reverse = (num) => {
    const str = num.toString();
    let reverseStr = "";
    for(let i = str.length - 1; i >= 0; i--) {
        reverseStr += str[i];
    };
    return Number(reverseStr);
};

console.log(reverse(1423));