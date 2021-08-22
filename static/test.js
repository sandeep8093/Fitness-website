const nav = document.querySelector('#navbar');
let topOfNav = nav.offsetTop;

function fixNav() {
  if (window.scrollY >= topOfNav) {
    document.style.paddingTop = nav.offsetHeight + 'px';
    document.classList.add('fixed-nav');
  } else {
    document.classList.remove('fixed-nav');
    document.style.paddingTop = 0;
  }
}

window.addEventListener('scroll', fixNav);

var btnContainer = document.getElementById('myDIV');

// Get all buttons with class="btn" inside the container
var btns = btnContainer.getElementsByClass('btn1');

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener('click', function () {
    var current = document.getElementsByClassName('active');
    current[0].className = current[0].className.replace(' active', '');
    this.className += ' active';
  });
}
