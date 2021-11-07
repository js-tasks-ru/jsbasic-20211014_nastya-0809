function hideSelf() {
  let hideBtn = document.querySelector('button.hide-self-button');

  hideBtn.addEventListener('click', function (e) {

    e.preventDefault;
    this.hidden = true;

  })
}
