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