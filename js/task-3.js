const inputElem = document.querySelector("#name-input");
const outputElem = document.querySelector("#name-output");
outputElem.innerHTML = "";

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