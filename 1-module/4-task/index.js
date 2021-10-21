function checkSpam(str) {
  let currStr = str.toLowerCase();

  if (currStr.includes("1xbet") || currStr.includes("xxx")) {
    return true;
  } else {
    return false;
  }
}
