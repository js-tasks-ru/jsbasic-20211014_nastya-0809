function showSalary(users, age) {
  let resultArr = "";

  for (let i = 0; i < users.length; i++) {

    if (users[i].age <= age) {
      resultArr += `${users[i].name}, ${users[i].balance}
`;
    }
  }

  return resultArr.slice(0, -1);
}
