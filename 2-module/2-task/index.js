function isEmpty(obj) {

  // 1 ВАРИАНТ
  for(var key in obj) {
    return false;
  }

  return true;

  // // 2 ВАРИАНТ
  // return Object.keys(obj).length === 0);

  // // 3 ВАРИАНТ - еще вот так можно, но проверка на undefined не проходит (
  // return JSON.stringify(obj) === '{}'

}
