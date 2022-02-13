// Loading everything as soon as our basic html page loads.
document.addEventListener("DOMContentLoaded", () => {
  loadAlgoList();
  renderArray();
  changeCode();
});
// to generate array whenever clicked.
generateBtn.addEventListener("click", () => renderArray());
// to change size of the array whenever value changes.
inputSizeRange.addEventListener("change", () => changeSize());
// whenever user switched between algorithms.
sortAlgo.addEventListener("change", () => {
  renderArray();
  changeCode();
});
// whenever user clicks start button.
startBtn.addEventListener("click", () => {
  let algo = sortAlgo.value;
  switch (algo) {
    case "bubble": {
      bubbleSort();
      break;
    }
    case "insertion": {
      insertionSort();
      break;
    }
    case "selection": {
      selectionSort();
      break;
    }
  }
});
