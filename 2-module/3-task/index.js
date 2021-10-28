let calculator = {
  read: function (a, b) {
  // a = prompt("введите первое значение", 0);
  // b = prompt("введите второе значение", 0);
    this.firstVal = a;
    this.secondVal = b;
  },

  sum: function () {
    return this.firstVal + this.secondVal;
  },

  mul: function () {
    return this.firstVal * this.secondVal;
  }
};


// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
