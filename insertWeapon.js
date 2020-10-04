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
