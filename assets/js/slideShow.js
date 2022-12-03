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
