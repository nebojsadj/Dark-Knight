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
