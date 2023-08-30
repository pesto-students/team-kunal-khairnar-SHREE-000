function printPermutations(str, prefix = "") {
    if (str.length === 0) {
        console.log(prefix, 'prefix');
    } else {
        for (let i = 0; i < str.length; i++) {
            const char = str[i];
            console.log(char, 'char');
            const rest = str.slice(0, i) + str.slice(i + 1);
            printPermutations(rest, prefix + char);
        }
    }
  }
  
  const input = "abc";
  printPermutations(input);