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
