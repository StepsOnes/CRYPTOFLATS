AOS.init();
const circleAnimatePurple = document.querySelector('.circle-animate-purple');
const circleAnimateGreen = document.querySelector('.circle-animate-green');

const menu = document.getElementById('mobile-menu');
const closeMenu = document.getElementById('close');
const openMenu = document.getElementById('open');
const body = document.querySelector('body');

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

const boxes2 = Array.from(document.querySelectorAll(".faq__accordion__header"));

boxes2.forEach((box) => {
    box.addEventListener('click', boxHandler2)
});

function boxHandler2(e){
    e.preventDefault();
    let currentBox = e.target.closest('.faq__accordion__header');
    let currentBody = currentBox.nextElementSibling;
    currentBox.classList.toggle('folding-plus')

    currentBody.classList.toggle('active-body');

    if (currentBody.classList.contains('active-body')) {
        currentBody.style.maxHeight = (currentBody.scrollHeight) + "px"; // открываем контент
    } else {
        currentBody.style.maxHeight = 0;
    }
}


const storyAnimate = document.querySelector('#story-animate');
const animateImg = ['1.png', '2.png', '3.png', '4.png', '5.png', '6.png', '7.png', '8.png'];

let i = 0;

setInterval(toggle, 400);

function toggle() {
    storyAnimate.src = `assets/img/animation/${animateImg[i++]}`;
    if (i >8) {
        i = 0;
        storyAnimate.src = `assets/img/animation/${animateImg[0]}`;
    }
}

const gameAnimation = document.querySelector('.game-animation_img');
const gameAnimationImg = ['THE GAME 1.png', 'THE GAME 2.png', 'THE GAME 3.png', 'THE GAME 4.png', 'THE GAME 5.png'];

setInterval(toggle2, 400);

let j = 0;
function toggle2() {
    gameAnimation.src = `assets/img/game_animation/${gameAnimationImg[j++]}`;
    if (j > 5) {
        j = 0;
        gameAnimation.src = `assets/img/game_animation/${gameAnimationImg[0]}`;
    }
}

