const findProduct = (num1, num2) => {
    let hcf = 1;
    let lcm = 1;
    if(num1 === 0 || num1 < 0 || num2 === 0 || num2 < 0) return null;
    if(num1 === num2) hcf = num1;
    else {
        let divisibleArr = [];
        let max = 0;
        let min = 0;
        if (num1 >= num2) {
          max = num1;
          min = num2;
        } else {
          max = num2;
          min = num1;
        }
        for (let i = 1; i < max / 2; i++) {
          if (max % i === 0) divisibleArr.push(i);
        }
        for (let i = 0; i < divisibleArr.length; i++) {
          if (min % divisibleArr[i] === 0) hcf = divisibleArr[i];
        }
    }
    lcm = (num1 * num2) / hcf;
    return lcm * hcf;
};

console.log(findProduct(15, 25));
