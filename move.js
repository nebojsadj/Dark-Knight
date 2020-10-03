function clickForMove() {
  greenBox = document.querySelectorAll('.arrow');
    for (let i = 0; i < greenBox.length; i++) {
      greenBox[i].addEventListener('click', move);
    }
};

function move() {
  let player1 = document.querySelector('.joker');
  let player2 = document.querySelector('.batman');

      if (player1 !== null) {
        player1.parentElement.removeEventListener('click', displayPosition);
        player1.remove();
        if (this.parentElement.children[0].className == 'weapon') {
            let src = this.parentElement.children[0].getAttribute('src');
            jokerWeapon.innerHTML = '<img src="'+src+'" class="weapon">';
            sound.play();
        }
        this.parentElement.innerHTML = '<img id="player1" src="sl/joker.png" class="players">';

      }else if (player2 !== null) {
          player2.parentElement.removeEventListener('click', displayPosition);
          player2.remove();
          if (this.parentElement.children[0].className == 'weapon') {
              let src = this.parentElement.children[0].getAttribute('src');
              batmanWeapon.innerHTML = '<img src="'+src+'" class="weapon">';
              sound.play();
          }
          this.parentElement.innerHTML = '<img id="player2" src="sl/batman.png" class="players">';

      }

        greenBox = document.querySelectorAll('.arrow');

        for (let i = 0; i < greenBox.length; i++) {
            if (greenBox[i].parentElement.children[0].className == 'weapon') {
                greenBox[i].parentElement.children[1].remove();
            }else {
              greenBox[i].parentElement.innerHTML  = '';
            }
        }
        joker = document.querySelector('#player1');
        batman = document.querySelector('#player2');

        if (br == 10) {
          br = 1;
        }

        if (br == 1) {
          joker.removeEventListener('click', goJoker);
          batman.addEventListener('click', goBatman);
        }else if (br == 2) {
          batman.removeEventListener('click', goBatman);
          joker.addEventListener('click', goJoker);
        }
};
