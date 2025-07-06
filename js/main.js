const navbar = document.querySelector('.navbar');

function navBtnClick() {
  const hamberger = document.querySelector('.hamberger');
  hamberger.classList.toggle('active');
}

var element = document.querySelector('#about-typed')
var typed = new Typed(element, {
  strings: ['websites', 'softwares', 'apps'],
  typeSpeed: 50,
  smartBackspace: true,
  loop: true,
  showCursor: false,
});

// Navbar change colors when scroll
document.addEventListener('DOMContentLoaded', function() {
  const navbarBrand = document.querySelector('.navbar-brand');
  const navbarSocial = document.querySelectorAll('.nav-social a');
  const homeSection = document.querySelector('#header');
  const homeHeight = homeSection.offsetHeight + 5900;
  
  window.addEventListener('scroll', function() {
    if (scrollY > homeHeight * 0.05) {
      navbar.classList.add('scrolled');
      navbarBrand.classList.add('scrolled');
      navbarSocial.forEach(function(link) {
        link.classList.add('scrolled');
      });
    } else {
      navbar.classList.remove('scrolled');
      navbarBrand.classList.remove('scrolled');
      navbarSocial.forEach(function(link) {
        link.classList.remove('scrolled');
      });
    }
  });
});


function updateLogoBasedOnBackground() {
  const logoImg = document.querySelector('.logo a img');
  const style = window.getComputedStyle(navbar);
  const bgColor = style.backgroundColor;
  if (bgColor === 'rgba(0, 0, 0, 0)' || bgColor === 'transparent') {
    logoImg.setAttribute('src', './../images/logo-light.png');
  } else {
    logoImg.setAttribute('src', './../images/logo-dark.png');
  }
}
document.addEventListener('DOMContentLoaded', updateLogoBasedOnBackground);
window.addEventListener('scroll', updateLogoBasedOnBackground);
window.addEventListener('resize', updateLogoBasedOnBackground);