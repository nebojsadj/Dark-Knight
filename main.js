
  startGame();
  function startGame() {
    startWrapp.onclick = function () {
      startWrapp.style.display = 'none';
      wrapp.style.display = 'block';
      theme.play();
      createTable();
    }
    counter = 1;
  };




function markJoker() {
  let boxes = document.querySelectorAll('.box');
       for (let i = 0; i < boxes.length; i++) {
         boxes[i].id = i;
       }
       joker.parentElement.addEventListener('click', displayPosition);
};

function markBatman() {
  let boxes = document.querySelectorAll('.box');
       for (let i = 0; i < boxes.length; i++) {
         boxes[i].id = i;
       }
       batman.parentElement.addEventListener('click', displayPosition);
};

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

  function fight() {
    fightAudio.play();

        if (jokerWeapon.children[0].getAttribute('src') == 'sl/weapon0.jpg') {
          health2(player2Health,'knife',10);
        }else if (jokerWeapon.children[0].getAttribute('src') == 'sl/weapon1.jpg') {
          health2(player2Health,'sword',6);
        }else if (jokerWeapon.children[0].getAttribute('src') == 'sl/weapon2.jpg') {
          health2(player2Health,'gun',4);
        }else if (jokerWeapon.children[0].getAttribute('src') == 'sl/weapon3.jpg') {
          health2(player2Health,'machineGun',2);
        }else if (jokerWeapon.children[0].getAttribute('src') == 'sl/hands.jpg') {
          health2(player2Health,'hands',15);
        }


        if (batmanWeapon.children[0].getAttribute('src') == 'sl/weapon0.jpg') {
          health1(player1Health,'knife',10);
        }else if (batmanWeapon.children[0].getAttribute('src') == 'sl/weapon1.jpg') {
          health1(player1Health,'sword',6);
        }else if (batmanWeapon.children[0].getAttribute('src') == 'sl/weapon2.jpg') {
          health1(player1Health,'gun',4);
        }else if (batmanWeapon.children[0].getAttribute('src') == 'sl/weapon3.jpg') {
          health1(player1Health,'machineGun',2);
        }else if (batmanWeapon.children[0].getAttribute('src') == 'sl/hands.jpg') {
          health1(player1Health,'hands',15);
        }
  };


  function health1(pl,weapon,num) {
    let arr = [];
    for (let i = 0; i < num; i++) {
      arr.push('<div class="'+weapon+'"></div>');
      pl.innerHTML += arr[i];
    }
       loop1 = setInterval(function () {
          arr.shift();
            pl.innerHTML = '';
          for (let i = 0; i < arr.length; i++) {
            pl.innerHTML += arr[i];
          }

          if (arr.length == 0) {
            gameOwer();
            document.querySelector('#winnerB').innerHTML = '<img src="sl/winBatman.gif">';
            setTimeout(function () {
              audioBatman.play();
            },2000)
            counter2++;
            wins2.innerHTML = counter2;
          }
        },2900);

  };
  function health2(pl,weapon,num) {
    let arr = [];
    for (let i = 0; i < num; i++) {
      arr.push('<div class="'+weapon+'"></div>');
      pl.innerHTML += arr[i];
    }
       loop2 = setInterval(function () {
          arr.shift();
            pl.innerHTML = '';
          for (let i = 0; i < arr.length; i++) {
            pl.innerHTML += arr[i];
          }

          if (arr.length == 0) {
            gameOwer();
            document.querySelector('#winnerJ').innerHTML = '<img src="sl/winJoker.gif">';

            setTimeout(function () {
              audioJoker.play();
            },2000)
            counter1++;
            wins1.innerHTML = counter1;
          }
        },3000);

  };

  function gameOwer() {
    clearInterval(loop1);
    clearInterval(loop2);
    gameOwerAudio.play();
    wrapp2.innerHTML = '<img src="sl/gOwer.gif">';
    wrapp2.onclick = function () {
      startWrapp.style.display = 'block';
      wrapp.style.display = 'none';
      wrapp2.innerHTML = '<img src="sl/fight.gif">';
      wrapp2.style.display = 'none';
      document.querySelector('#winnerJ').innerHTML = '';
      document.querySelector('#winnerB').innerHTML = '';
      theme.load();
      gameOwerAudio.load();
      player2Health.innerHTML = '<div></div>';
      player1Health.innerHTML = '<div></div>';
      jokerWeapon.innerHTML = '<img src="sl/hands.jpg">';
      batmanWeapon.innerHTML = '<img src="sl/hands.jpg">';
      startGame();
    }
  };
