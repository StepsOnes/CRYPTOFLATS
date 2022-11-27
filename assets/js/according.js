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
