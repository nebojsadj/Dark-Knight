
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
