const algoList = [
  ["Bubble Sort", "bubble"],
  ["Insertion Sort", "insertion"],
  ["Selection Sort", "selection"],
];

const firstAlgo = "bubble";

const inputSizeRange = document.getElementById("inputSize");
const sortAlgo = document.getElementById("sortAlgo");

const startBtn = document.getElementById("start");
const generateBtn = document.getElementById("generate");

const arrayNode = document.querySelector(".array");
const previewCode = document.getElementById("code");

// -------------------------- Required functions -------------------------------

// This function is called after the completion of exec of an algo
const enableArrayInputs = () => {
  inputSizeRange.title = "";
  generateBtn.title = "";
  startBtn.title = "";
  sortAlgo.title = "";
  inputSizeRange.disabled = false;
  generateBtn.disabled = false;
  startBtn.disabled = false;
  sortAlgo.disabled = false;
};

// This function is called whenever algo starts
const disableArrayInputs = () => {
  inputSizeRange.title = "Wait please!";
  generateBtn.title = "Wait please!";
  startBtn.title = "Wait please!";
  sortAlgo.title = "Wait please!";
  inputSizeRange.disabled = true;
  generateBtn.disabled = true;
  startBtn.disabled = true;
  sortAlgo.disabled = true;
};

// Adding delay
const sleep = (duration) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, duration * 1000);
  });
};

// Setting class to the cell so that it will have proper style as per given in stylesheet.
const setClass = (cellNode, className = null) => {
  if (!className) cellNode.className = "cell";
  else cellNode.className = "cell " + className;
};

// Function to generate random numbers.
const generateRandom = (min, max) =>
  Math.floor(Math.random() * (max - min) + min);

// This function creates cells having random numbers.
const createCell = () => {
  let cellNode = document.createElement("div");
  cellNode.textContent = generateRandom(5, 1000);
  setClass(cellNode);
  return cellNode;
};

// This function creates an array using createCell() in a loop.
const renderArray = () => {
  arrayNode.innerHTML = "";
  let arrayLength = parseInt(inputSizeRange.value);
  for (let i = 0; i < arrayLength; i++) arrayNode.appendChild(createCell());
};

// Change the size of the array as per defined by the user [increase/decrease].
const changeSize = () => {
  let cellArray = document.querySelectorAll(".cell");
  let curValue = cellArray.length;
  let newValue = parseInt(inputSizeRange.value);
  let change = newValue - curValue;

  if (change > 0) {
    for (let i = 0; i < change; i++) arrayNode.appendChild(createCell());
  } else {
    for (let i = 0; i < Math.abs(change); i++)
      arrayNode.removeChild(cellArray[curValue - 1 - i]);
  }
};

// Loading dropdown list of sorting algorithms.
const loadAlgoList = () => {
  for (let i = 0; i < algoList.length; i++) {
    optionEl = document.createElement("option");
    optionEl.textContent = algoList[i][0];
    optionEl.value = algoList[i][1];
    sortAlgo.appendChild(optionEl);
  }
  document.querySelector(`option[value="${firstAlgo}"]`).selected = true;
};

// Changing the preview code written as per the algorithm user chose.
const changeCode = () => {
  let algo = sortAlgo.value;
  switch (algo) {
    case "bubble": {
      previewCode.textContent = `
        void bubbleSort(int arr[]) 
        { 
            int n = arr.length; 
            for (int i = 0; i < n-1; i++) 
                for (int j = 0; j < n-i-1; j++) 
                    if (arr[j] > arr[j+1]) 
                    { 
                        // swap arr[j+1] and arr[i] 
                        int temp = arr[j]; 
                        arr[j] = arr[j+1]; 
                        arr[j+1] = temp; 
                    } 
        }
                `;
      break;
    }
    case "insertion": {
      previewCode.textContent = `
void insertionSort(int arr[]) 
{ 
    int n = arr.length; 
        for (int i = 1; i < n; ++i) { 
            int key = arr[i]; 
            int j = i - 1; 
          
            /* Move elements of arr[0..i-1], that are 
            greater than key, to one position ahead 
            of their current position */
            while (j >= 0 && arr[j] > key) { 
                arr[j + 1] = arr[j]; 
                j = j - 1; 
            } 
            arr[j + 1] = key; 
        } 
} 
        `;
      break;
    }
    case "selection": {
      previewCode.textContent = `
void selectionSort(int arr[]) 
{ 
    int n = arr.length; 
          
    // One by one move boundary of unsorted subarray 
    for (int i = 0; i < n-1; i++) 
    { 
        // Find the minimum element in unsorted array 
        int min_idx = i; 
        for (int j = i+1; j < n; j++) 
            if (arr[j] < arr[min_idx]) 
                min_idx = j; 
          
        // Swap the found minimum element with the first 
        // element 
        int temp = arr[min_idx]; 
        arr[min_idx] = arr[i]; 
        arr[i] = temp; 
    } 
}             
            `;
      break;
    }
  }
};
