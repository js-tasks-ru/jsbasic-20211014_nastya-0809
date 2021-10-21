function print(text) {
  console.log(text);
}

function isValid(name) {

  if (name != null && name.length >= 4 && !name.includes(" ")) {
    return true;
  } else {
    return false;
  }

  /*
  // еще можно вот так, но я не могу корректную регулярку составить
  // /^[^\s]{4,}$/.test(currName);
  */
}

function sayHello() {
  let userName = prompt('Введите ваше имя');

  if (isValid(userName)) {
    print(`Welcome back, ${userName}!`);
  } else {
    print('Некорректное имя');
  }
}
