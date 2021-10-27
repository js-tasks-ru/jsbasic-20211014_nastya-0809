function sumSalary(salaries) {

  let resultSalary = 0;

  for (let key in salaries) {
    // if (typeof salaries[key] === 'number' && !isNaN(salaries[key]) && isFinite(salaries[key])) {
    if (typeof salaries[key] === 'number' && isFinite(salaries[key])) {
      resultSalary += salaries[key];
      console.log("res = ", resultSalary);
    }
  }

  return resultSalary;

}
