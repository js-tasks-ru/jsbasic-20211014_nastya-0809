function makeFriendsList(friends) {

  // let uList = document.createElement("ul");
  //
  // for (let i = 0; i < friends.length; i++) {
  //
  //   let uListEl = document.createElement("li");
  //   uListEl.innerHTML = `${friends[i].firstName} ${friends[i].lastName}`;
  //   uList.appendChild(uListEl);
  // }
  //
  // document.body.insertAdjacentElement('beforeend', uList);


  let uList = document.createElement("ul");

  for (let i = 0; i < friends.length; i++) {

    let uListEl = document.createElement("li");
    uListEl.innerHTML = `${friends[i].firstName} ${friends[i].lastName}`;
    uList.appendChild(uListEl);
  }

  return uList;

}
