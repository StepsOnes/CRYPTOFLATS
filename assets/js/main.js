AOS.init();
const circleAnimatePurple = document.querySelector('.circle-animate-purple');
const circleAnimateGreen = document.querySelector('.circle-animate-green');

const menu = document.getElementById('mobile-menu');
const closeMenu = document.getElementById('close');
const openMenu = document.getElementById('open');

const navLinks = document.querySelectorAll('.mobile-nav__item');

const scrollBtn = document.getElementById('scroll-top');

document.addEventListener('scroll', function (e) {
    if (window.scrollY > 100) {
        scrollBtn.classList.add('visible');
    } else {
        scrollBtn.classList.remove('visible');
    }
});

scrollBtn.addEventListener('click', function(){
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
})

navLinks.forEach((item) => {
    item.addEventListener('click', function () {
        menu.classList.toggle('not-visible');
    })
})

openMenu.addEventListener('click', function () {
    menu.classList.toggle('not-visible');
});

closeMenu.addEventListener('click', function () {
    menu.classList.toggle('not-visible');
})

document.addEventListener('scroll', function () {
    if (window.scrollY > 2000) {
        circleAnimatePurple.classList.add('circle-animate');
    }
    if (window.scrollY > 2600) {
        circleAnimateGreen.classList.add('circle-animate');
    }
});



