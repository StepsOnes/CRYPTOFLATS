AOS.init();
const circleAnimatePurple = document.querySelector('.circle-animate-purple');

document.addEventListener('scroll', function () {
    let pos = getCoords(circleAnimatePurple).top;
    if (window.scrollY > 2000) {
        circleAnimatePurple.classList.add('circle-animate');
    }
    console.log(window.scrollY);
    console.log(pos);
})

function getCoords(elem) {
    let box = elem.getBoundingClientRect();

    return {
        top: box.top + window.pageYOffset,
        right: box.right + window.pageXOffset,
        bottom: box.bottom + window.pageYOffset,
        left: box.left + window.pageXOffset
    };
}

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