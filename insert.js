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