const circleAnimatePurple = document.querySelector('.circle-animate-purple');
const circleAnimateGreen = document.querySelector('.circle-animate-green');
const circleAnimateYellow = document.querySelector('.circle-animate-yellow');

const menu = document.getElementById('mobile-menu');
const closeMenu = document.getElementById('close');
const openMenu = document.getElementById('open');

const navLinks = document.querySelectorAll('.mobile-nav__item');

const joinWhitelistBtn = Array.from(document.querySelectorAll('.about-product__buy-block__btn'));
const modalWindow = document.getElementById('modal-window');
const closeModalWindow = document.querySelector('.close-modal');

joinWhitelistBtn.forEach((item) => {
    item.addEventListener('mouseover', function () {
        this.textContent = "Coming soon";
    });

    item.addEventListener('mouseout', function () {
        this.textContent = "Join whitelist";
    });
});

navLinks.forEach((item) => {
    item.addEventListener('click', function () {
        menu.classList.toggle('not-visible');
    });
});

openMenu.addEventListener('click', function () {
    menu.classList.toggle('not-visible');
});

closeMenu.addEventListener('click', function () {
    menu.classList.toggle('not-visible');
});

document.addEventListener('scroll', function () {
    if (window.scrollY > 2000) {
        circleAnimatePurple.classList.add('circle-animate');
    }
    if (window.scrollY > 3200) {
        circleAnimateGreen.classList.add('circle-animate');
    }

    if (window.scrollY > 2600) {
        circleAnimateYellow.classList.add('circle-animate');
    }
});





