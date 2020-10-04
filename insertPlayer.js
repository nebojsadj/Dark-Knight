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
