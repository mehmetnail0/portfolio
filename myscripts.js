const carousel = document.querySelector('.projectCards')
const card = document.querySelector('.projectCard')
const leftButton = document.querySelector('#goLeftArrow')
const rightButton = document.querySelector('#goRightArrow')

const carouselWidth = carousel.offsetWidth;
const cardStyle = card.currentStyle || window.getComputedStyle(card)
const cardMarginRight = Number(cardStyle.marginRight.match(/\d+/g));

const cardCount = carousel.querySelectorAll('.projectCard').length


// console.log(maxX)

rightButton.onclick = function () {
    const widthItem = card.offsetWidth;
    carousel.scrollLeft += widthItem; console.log('sadsadsda')

}
leftButton.onclick = function () {
    const widthItem = card.offsetWidth;
    carousel.scrollLeft -= widthItem;
    console.log('sadsadsda')
}
