const inputElem = document.querySelector("#name-input");
const outputElem = document.querySelector("#name-output");

const handleInput = (evt) => {
  outputElem.innerHTML = evt.currentTarget.value.trim();

  if (evt.currentTarget.value.trim() === "" ) {
    outputElem.innerHTML = "Anonymous";
  } 
  reset();
};

function reset() {
    inputElem.innerHTML = "";
};

inputElem.addEventListener("input", handleInput);