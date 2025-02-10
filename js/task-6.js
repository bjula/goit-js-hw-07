function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777216)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputElem = document.querySelector('[type="number"]');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxesContainer = document.querySelector('#boxes');


createBtn.addEventListener('click', createBoxes);
destroyBtn.addEventListener('click', destroyBoxes);


function createBoxes(amount) {
  boxesContainer.innerHTML = '';
  const amountBox =  parseInt(inputElem.value);

  if (amountBox > 0 && amountBox <= 100) {
    const fragment = document.createDocumentFragment();

    for (let i = 0; i < amountBox; i++) {
      const box = document.createElement('div');
      box.classList.add(`div-${i}`);
      const size = 30 + i * 10;
      box.style.width = `${size}px`;
      box.style.height = `${size}px`;
      box.style.backgroundColor = getRandomHexColor();

      fragment.appendChild(box);
    };

    boxesContainer.appendChild(fragment);
  };

  inputElem.value = '';
};

function destroyBoxes() {
  boxesContainer.innerHTML = '';
  inputElem.value = '';
}
