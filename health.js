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
