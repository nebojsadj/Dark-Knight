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
