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
