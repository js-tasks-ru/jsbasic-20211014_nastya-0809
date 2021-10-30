function camelize(str) {

  let splitArr = str.split("-");
  let resultArr = [];
  resultArr.push(splitArr[0]);

  for (let i = 1; i < splitArr.length; i++) {
    resultArr.push(splitArr[i].charAt(0).toUpperCase() + splitArr[i].slice(1));
  }

  return resultArr.join("");
}
