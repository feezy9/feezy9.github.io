
const keyinput = document.querySelector('#keyinput');
const liS = document.querySelectorAll('.colfilter');


keyinput.addEventListener('keyup', function() {
    let val = keyinput.value.toLowerCase();
    for (el of liS) {
    el.style.display =  !el.id.includes(val) ? 'none' : '';
  }
})

M.AutoInit();
