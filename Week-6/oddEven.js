const oddEven = (num) => {
    if(num > 0) if(num % 2 === 0) return "Even";
    else return "Odd";
};

console.log(oddEven(5));