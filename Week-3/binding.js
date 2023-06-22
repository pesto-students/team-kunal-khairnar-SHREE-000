function calculate(num1, num2){
    return ((this.a + this.b) * num1 / num2);
}

console.log(calculate.call({a: 10, b: 20}, 100, 10));
console.log(calculate.apply({a: 10, b: 20}, [100, 10]));
const bindFunc = calculate.bind({a: 10, b: 20}, 100, 10);
console.log(bindFunc());
