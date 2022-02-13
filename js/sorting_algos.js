// Bubble sort
const bubbleSort = async () => {
  disableArrayInputs();
  let cellArray = document.querySelectorAll(".cell");

  for (let i = 0; i < cellArray.length; i++) {
    for (let j = 0; j < cellArray.length - i - 1; j++) {
      await sleep(1.2);

      // Setting classes for current cell elements.
      setClass(cellArray[j], "referenced");
      setClass(cellArray[j + 1], "compared");
      // Reading values from selected elements
      let a = parseInt(cellArray[j].textContent);
      let b = parseInt(cellArray[j + 1].textContent);

      await sleep(2);
      // check if left value is greater than the right
      if (a > b) {
        // change classes
        setClass(cellArray[j], "referenced m-right");
        setClass(cellArray[j + 1], "compared m-left");

        await sleep(0.99);
        // swapping values
        cellArray[j].textContent = b;
        cellArray[j + 1].textContent = a;
      }
      await sleep(1);
      // removing classes
      setClass(cellArray[j]);
      setClass(cellArray[j + 1]);
    }
    // animation for the current cell done.
    setClass(cellArray[cellArray.length - i - 1], "done");
  }

  await sleep(2);
  for (let i = 0; i < cellArray.length; i++) {
    // remove the classes
    setClass(cellArray[i]);
  }
  // Enable user to input new things.

  enableArrayInputs();
};

// Insertion sort
const insertionSort = async () => {
  disableArrayInputs();
  let cellArray = document.querySelectorAll(".cell");
  let keyNode = document.createElement("div");
  keyNode.textContent = "KEY";
  setClass(keyNode);

  await sleep(2);
  arrayNode.appendChild(keyNode);
  await sleep(2);

  for (let i = 1; i < cellArray.length; i++) {
    setClass(cellArray[i], "referenced");
    await sleep(1);
    keyNode.textContent = cellArray[i].textContent;

    setClass(cellArray[i]);
    await sleep(1);
    setClass(keyNode, "compared");

    let j = i - 1;

    while (
      j >= 0 &&
      parseInt(cellArray[j].textContent) > parseInt(keyNode.textContent)
    ) {
      await sleep(2);
      setClass(cellArray[j], "referenced m-right");

      await sleep(1);

      cellArray[j + 1].textContent = cellArray[j].textContent;
      setClass(cellArray[j]);
      j--;
    }
    await sleep(2);

    setClass(keyNode, "done");
    setClass(cellArray[j + 1], "done");

    await sleep(1);

    cellArray[j + 1].textContent = keyNode.textContent;
    keyNode.textContent = "KEY";
    setClass(keyNode);
    setClass(cellArray[j + 1]);

    await sleep(2);
    keyNode.textContent = "KEY";
  }
  await sleep(2);
  arrayNode.removeChild(keyNode);

  enableArrayInputs();
};

// Selection sort
const selectionSort = async () => {
  disableArrayInputs();

  let cellArray = document.querySelectorAll(".cell");
  let minIdxNode = document.createElement("div");
  minIdxNode.textContent = "min_idx";
  setClass(minIdxNode);

  await sleep(2);
  arrayNode.appendChild(minIdxNode);

  for (let i = 0; i < cellArray.length - 1; i++) {
    await sleep(2);
    setClass(cellArray[i], "referenced");

    await sleep(1);
    let min_idx = i;
    minIdxNode.textContent = min_idx;

    for (let j = i + 1; j < cellArray.length; j++) {
      await sleep(2);
      setClass(cellArray[j], "compared");
      await sleep(1);
      if (
        parseInt(cellArray[j].textContent) <
        parseInt(cellArray[min_idx].textContent)
      ) {
        min_idx = j;
        minIdxNode.textContent = min_idx;
      }
      await sleep(1);
      setClass(cellArray[j]);
    }

    setClass(cellArray[i], "done");
    setClass(cellArray[min_idx], "done");

    await sleep(1);

    let temp = cellArray[min_idx].textContent;
    cellArray[min_idx].textContent = cellArray[i].textContent;
    cellArray[i].textContent = temp;

    setClass(cellArray[i]);
    setClass(cellArray[min_idx]);

    await sleep(1);
    minIdxNode.textContent = "min_idx";
  }
  await sleep(2);
  arrayNode.removeChild(minIdxNode);
  enableArrayInputs();
};
