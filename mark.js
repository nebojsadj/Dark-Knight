function markJoker() {
  let boxes = document.querySelectorAll('.box');
       for (let i = 0; i < boxes.length; i++) {
         boxes[i].id = i;
       }
       joker.parentElement.addEventListener('click', displayPosition);
};

function markBatman() {
  let boxes = document.querySelectorAll('.box');
       for (let i = 0; i < boxes.length; i++) {
         boxes[i].id = i;
       }
       batman.parentElement.addEventListener('click', displayPosition);
};
