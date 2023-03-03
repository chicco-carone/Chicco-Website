var isBackground1 = true;

function changeBackground() {
  if (isBackground1) {
    document.body.style.backgroundImage = "url('background_white.jpeg')";
  } else {
    document.body.style.backgroundImage = "url('background_dark.jpeg')";
  }
  isBackground1 = !isBackground1;
}
