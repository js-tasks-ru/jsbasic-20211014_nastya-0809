function namify(users) {
  let namesArr = [];

  for (let i = 0; i < users.length; i++) {
    namesArr.push(users[i].name);
  }

  return namesArr;
}
