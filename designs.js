// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

// lines 6 - 10 store the HTML elements that we need in order to create the grid.
let h = document.querySelector('#input_height');
let w = document.querySelector('#input_width');
let tb = document.querySelector('#pixel_canvas');
let c = document.querySelector('#colorPicker');
let size = document.querySelector('#sizePicker');

// this function holds the logic of creating the grid.
function makeGrid() {
  let width = w.value; // here we store the value of the element '#input_width'.
  let height = h.value; // here we store the value of the element '#height'.

  // this loop creates the row of the grid.
  for (let i = 0; i < height; i++) {
    let r = tb.insertRow(i);
    // this loop creates the cell within the row of the grid.
    for (let j = 0; j < width; j++) {
      let cell = r.insertCell(j);
      // here we add event listeneres to toggle the color and change its value.
      cell.addEventListener('click', function () {
        cell.style.backgroundColor = c.value;
      });

      cell.addEventListener('dblclick', function () {
        cell.style.backgroundColor = '';
      });
    }
  }
};

// on lines 37 - 43, we add 2 event listeners that clear the grid when either input box is clicked.
h.addEventListener('click', function () {
  tb.innerHTML = '';
});

w.addEventListener('click', function () {
  tb.innerHTML = '';
});


// on lines 47 - 52, we store the value of the HTML element. We then add an event listener to create -
// the grid as soon as the submit button is pressed. We also clear the values from the input boxes.
size.addEventListener('submit', function (e) {
  e.preventDefault();
  makeGrid();
  h.value = '';
  w.value = '';
});
