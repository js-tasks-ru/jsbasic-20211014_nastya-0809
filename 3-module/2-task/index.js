function filterRange(arr, a, b) {
  let filterArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= a && arr[i] <= b) {
      filterArr.push(arr[i]);
    }
  }
  return filterArr;

}
