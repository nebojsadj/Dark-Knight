function displayPosition() {
  let boxes = document.querySelectorAll('.box');
    position = this.id;
    positionLeft = position - 1;
    positionRight = parseInt(position) + 1;
    positionTop = position - 10;
    positionBottom = parseInt(position) + 10;

  if (positionLeft < 0 || positionLeft == 9 || positionLeft == 19 || positionLeft == 29 || positionLeft == 39 || positionLeft == 49 || positionLeft == 59 || positionLeft == 69 || positionLeft == 79 || positionLeft == 89) {

  }else {
    if (!boxes[positionLeft].children[0]) {
        boxes[positionLeft].innerHTML = '<div class="arrow"> ˂ </div>';
    }
    if (boxes[positionLeft].children[0].getAttribute('class') == 'weapon') {
        boxes[positionLeft].innerHTML += '<div class="arrow"> ˂ </div>';
    }
    if (boxes[positionLeft].children[0].getAttribute('class') == 'players') {
        wrapp.style.display = 'none';
        wrapp2.style.display = 'block';
        fight();
    }
  }
  if (positionRight == 10 || positionRight == 20 || positionRight == 30 || positionRight == 40 || positionRight == 50 || positionRight == 60 || positionRight == 70 || positionRight == 80 || positionRight == 90 || positionRight == 100) {

  }else {
      if (!boxes[positionRight].children[0]) {
          boxes[positionRight].innerHTML = '<div class="arrow"> ˃ </div>';
      }
      if (boxes[positionRight].children[0].getAttribute('class') == 'weapon') {
          boxes[positionRight].innerHTML += '<div class="arrow"> ˃ </div>';
      }
      if (boxes[positionRight].children[0].getAttribute('class') == 'players') {
          wrapp.style.display = 'none';
          wrapp2.style.display = 'block';
          fight();
      }
  }
  if (positionTop < 0 ) {

  }else {
    if (!boxes[positionTop].children[0]) {
        boxes[positionTop].innerHTML = '<div class="arrow"> ˄ </div>';
    }
    if (boxes[positionTop].children[0].getAttribute('class') == 'weapon') {
        boxes[positionTop].innerHTML += '<div class="arrow"> ˄ </div>';
    }
    if (boxes[positionTop].children[0].getAttribute('class') == 'players') {
        wrapp.style.display = 'none';
        wrapp2.style.display = 'block';
        fight();
    }
  }
  if (positionBottom >= 100) {

  }else {
    if (!boxes[positionBottom].children[0]) {
        boxes[positionBottom].innerHTML = '<div class="arrow"> ˅ </div>';
    }
    if (boxes[positionBottom].children[0].getAttribute('class') == 'weapon') {
        boxes[positionBottom].innerHTML += '<div class="arrow"> ˅ </div>';
    }
    if (boxes[positionBottom].children[0].getAttribute('class') == 'players') {
        wrapp.style.display = 'none';
        wrapp2.style.display = 'block';
        fight();
    }
  }
  clickForMove();
};
