function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777216)
    .toString(16)
    .padStart(6, 0)}`;
};

const buttonElem = document.querySelector('.change-color');
const bodyElem = document.querySelector('body');
const spanElem = document.querySelector('.color');

buttonElem.addEventListener('click', onBtnClick);

function onBtnClick(e){
  bodyElem.style.backgroundColor = getRandomHexColor();
  spanElem.textContent = `${bodyElem.style.backgroundColor}`

};