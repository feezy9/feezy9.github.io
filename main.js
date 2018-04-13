M.AutoInit();

const keyinput = document.querySelector('#keyinput');
const colfilter = document.querySelectorAll('.colfilter');


keyinput.addEventListener('keyup', function() {
    let val = keyinput.value.toLowerCase();
    for (el of colfilter) {
    el.style.display =  !el.id.includes(val) ? 'none' : '';
  }
})

const trig = document.querySelector('.sidenav-trigger');
const snoverlay = document.querySelector('.sidenav-overlay');
