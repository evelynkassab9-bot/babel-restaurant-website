
var overlay     = document.getElementById('overlay');
var btnOpenMenu = document.getElementById('btnOpenMenu');
var overlayClose = document.getElementById('overlayClose');

if (btnOpenMenu && overlay) {
  btnOpenMenu.addEventListener('click', function () {
    overlay.classList.add('open');      
  });
}
if (overlayClose && overlay) {
  overlayClose.addEventListener('click', function () {
    overlay.classList.remove('open');   
  });
}
if (overlay) {
  var menuLinks = overlay.querySelectorAll('.branchesList a');
  for (var i = 0; i < menuLinks.length; i++) {
    menuLinks[i].addEventListener('click', function () {
      overlay.classList.remove('open');
    });
  }
}

var slides = document.querySelectorAll('.mainBanner .slide');
var current = 0;

if (slides.length > 1) {
  setInterval(function () {
    slides[current].classList.remove('active');   
    current = (current + 1) % slides.length;      
    slides[current].classList.add('active');      
  }, 5000);                                       
}

function scrollToContent() {
  var target = document.getElementById('hpElements');
  if (target) { target.scrollIntoView({ behavior: 'smooth' }); }
}
var scrollDownBtn = document.getElementById('scrollDown');
var arrowBtn = document.getElementById('arrow');
if (scrollDownBtn) { scrollDownBtn.addEventListener('click', scrollToContent); }
if (arrowBtn)      { arrowBtn.addEventListener('click', scrollToContent); }
