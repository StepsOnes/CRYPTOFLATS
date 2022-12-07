const circleAnimatePurple = document.querySelector('.circle-animate-purple');
const circleAnimateGreen = document.querySelector('.circle-animate-green');
const circleAnimateYellow = document.querySelector('.circle-animate-yellow');

const menu = document.getElementById('mobile-menu');
const burgerBtn = Array.from(document.querySelectorAll('.burger'));
const navLinks = document.querySelectorAll('.mobile-nav__item');
const joinWhitelistBtn = Array.from(document.querySelectorAll('.about-product__buy-block__btn'));
const html = document.body;


burgerBtn.forEach((item) => {
    item.addEventListener('click', function () {
        html.classList.toggle('no-scroll');
        menu.classList.toggle('not-visible');
    })
})

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
        html.classList.toggle('no-scroll');
        menu.classList.toggle('not-visible');
    });
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









