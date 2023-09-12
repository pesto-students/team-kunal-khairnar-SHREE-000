const descending = (str) => {
    const arr = str.split(" ");
    for(let i = 0; i < arr.length - 1; i++) {
      for(let j = i + 1; j < arr.length; j++) {
        if(arr[i] < arr[j]) [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }
    return arr;
  };
  
  console.log(descending("64 34 25 12 22 11 90"));
  