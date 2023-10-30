const pallindrome = (number) => {
    const str = number.toString();
    for(let i = 0; i < str.length / 2; i++) {
        if(str[i] !== str[str.length - 1 - i]) return "No";
    };
    return "Yes";
};

console.log(pallindrome(1234321));