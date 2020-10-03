
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
