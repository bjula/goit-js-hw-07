function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777216)
    .toString(16)
    .padStart(6, 0)}`;
};

const buttonElem = document.querySelector('.change-color');
const spanElem = document.querySelector('.color');

buttonElem.addEventListener('click', changeColor);



function changeColor(){
  const bodyColor = getRandomHexColor();
  document.body.style.backgroundColor = bodyColor;
  spanElem.textContent = bodyColor;

};