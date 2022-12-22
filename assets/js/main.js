const circleAnimatePurple = document.querySelector('.circle-animate-purple');
const circleAnimateGreen = document.querySelector('.circle-animate-green');
const circleAnimateYellow = document.querySelector('.circle-animate-yellow');

const menu = document.getElementById('mobile-menu');
const burgerBtn = Array.from(document.querySelectorAll('.burger'));
const navLinks = document.querySelectorAll('.mobile-nav__item');
const joinWhitelistBtn = Array.from(document.querySelectorAll('.about-product__buy-block__btn'));
const html = document.body;

const tabButtons = Array.from(document.querySelectorAll('.rarity-tabs__button'));
const rarityBlocks = Array.from(document.querySelectorAll('.rarity-block'));

tabButtons.forEach((item) => {
    item.addEventListener('click', tabHandler);
});

function tabHandler(event) {
    let currentBtn = event.target;
    let tabId = currentBtn.getAttribute('data-flat');
    let currentTab = document.querySelector(tabId);

    tabButtons.forEach((tabButton) => {
        tabButton.style.border = 'none';
        tabButton.style.color = '#FFFF';
    });

    rarityBlocks.forEach((rarityBlock) => {
        rarityBlock.classList.remove('active-tab');
    });

    currentTab.classList.add('active-tab');

    let currentBtnColor = currentBtn.dataset.color;
    currentBtn.style.color = currentBtnColor;
    currentBtn.style.border = `2px solid ${currentBtnColor}`;
}



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
        this.textContent = "GET NFT PASS";
    });
});

navLinks.forEach((item) => {
    item.addEventListener('click', function () {
        html.classList.toggle('no-scroll');
        menu.classList.toggle('not-visible');
    });
});

document.addEventListener('scroll', function () {
    console.log(window.scrollY)
    if (window.scrollY > 3200) {
        circleAnimatePurple.classList.add('circle-animate');
    }
    if (window.scrollY > 5100) {
        circleAnimateGreen.classList.add('circle-animate');
    }

    if (window.scrollY > 4100) {
        circleAnimateYellow.classList.add('circle-animate');
    }
});

$(document).ready(function(){
    $('.autoplay').trigger("play");
});








