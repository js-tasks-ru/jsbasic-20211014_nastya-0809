function factorial(n) {

  // 1-й вариант - нисходящий: n! = n*(n-1)*(n-2)*..*1;
  // factorial(5) = 5! = 5*4*3*2*1
  let result = 1;

  if (n === 0 || n === 1) {
    return 1;

  } else if (n < 0) {
    return -1;

  } else {
    for (let i = n; i >= 1; i--) {
      result *= i;
    }
    return result;
  }


  /*
  // 2-й вариант - восходящий: n! = 1*2*3*...*n;
  // factorial(5) = 5! = 1*2*3*4*5
  let result = 1;

  if (n === 0 || n === 1) {
    return 1;
    //console.log(1);

  } else if (n < 0) {
    return -1;
    //console.log("error");

  } else {
    for (let i = 1; i <= n; i++) {
      result *= i;
    }

    return result;
    //console.log(result);
  }
  */
}
