
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

  function createTable() {
    let text1 = '';
    for (let i = 0; i < 40; i++) {
      text1 += '<div class="box"></div>';
    }
      wrapp.innerHTML = text1;

    let text2 = '';
    for (let i = 0; i < 20; i++) {
      text2 += '<div class="box"></div>';
    }
      wrapp.innerHTML += text2;

    let text3 = '';
    for (let i = 0; i < 40; i++) {
      text3 += '<div class="box"></div>';
    }
      wrapp.innerHTML += text3;
      insertWall();
      insertPlayer();
  };

  function insertWall() {
    let boxes = document.querySelectorAll('.box');
    let arr = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99];

      for (let i = 0; i < 10; i++) {
        let r = Math.floor(Math.random() * arr.length);
        let r2 = arr[r];
        boxes[r2].innerHTML = '<img src="sl/images.jpg" class="wall">';
        arr.splice(r,1);
      };

  };

  function insertPlayer() {
    let arr1 = [];
    let boxes = document.querySelectorAll('.box')
        for (let i = 0; i < boxes.length; i++) {
          if (!boxes[i].children[0]) {
              arr1.push(boxes[i]);
          }
        }

        for (let i = 0; i < arr1.length; i++) {
            if (counter == 1) {
              let r1 = Math.floor(Math.random() * 40);
              let r2 = Math.floor(Math.random() * (90 - 60) + 60);
              arr1[r1].innerHTML = '<img id="player1" src="sl/joker.png" class="players">';
              arr1[r2].innerHTML = '<img id="player2" src="sl/batman.png" class="players">';
              counter++;
            }
        }
        insertWeapon();
  };

  function insertWeapon() {
    let arr = [];
    let boxes = document.querySelectorAll('.box');
    for (let i = 0; i < boxes.length; i++) {
      if (!boxes[i].children[0]) {
          arr.push(boxes[i]);
      }
    }

    for (let i = 0; i < 4; i++) {
          let r = Math.floor(Math.random() * arr.length);
          arr[r].innerHTML = '<img src="sl/weapon'+i+'.jpg" class="weapon">';
          arr.splice(r,1);
    }
      joker = document.querySelector('#player1');
      batman = document.querySelector('#player2');

    joker.addEventListener('click', goJoker);

  };

function goJoker() {
  batman.addEventListener('click', goBatman);
  br = 1;
  joker.removeEventListener('click', goJoker);
  this.setAttribute('src','sl/joker.gif');
  this.className = 'joker';
  batman.setAttribute('src','sl/batman.png');
  markJoker();
};

function goBatman() {
  br = 2;
  batman.removeEventListener('click', goBatman);
  this.setAttribute('src','sl/batman.gif');
  this.className = 'batman';
  joker.setAttribute('src','sl/joker.png');
  markBatman();
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
