const reverseStr = (str, idx = str.length - 1, rvrs = "") => {
    if(idx < 0) return rvrs;
    else {
      rvrs += str[idx];
      idx --;
      return reverseStr(str, idx, rvrs);
    }
  };
  
  console.log(reverseStr("12345"));