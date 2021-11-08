function toggleText() {

  let toggleBtn = document.querySelector('button.toggle-text-button');
  let toggleText = document.getElementById('text');

  toggleBtn.addEventListener('click', function (e) {

    e.preventDefault();

    if (toggleText.hidden) {
      toggleText.hidden = false;
    } else {
      toggleText.hidden = true;
    }

  })


  // ваш код...
}
