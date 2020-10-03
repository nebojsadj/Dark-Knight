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
