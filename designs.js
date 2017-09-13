// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {
  let h = document.querySelector('#input_height');
  let w = document.querySelector('#input_width');
  let tb = document.querySelector('#pixel_canvas');
  let c = document.querySelector('#colorPicker');

  for (let i = 0; i <= w.value; i++) {
    let r = tb.insertRow(i);
    for (let j = 0; j <= h.value; j++) {
      let cell = r.insertCell(j);
      cell.addEventListener('click', function () {
        cell.style.backgroundColor = c.value;
      });
      
      cell.addEventListener('dblclick', function () {
        cell.style.backgroundColor = '';
      });
    }
  }
};

let size = document.querySelector('#sizePicker');

size.addEventListener('submit', function (e) {
  e.preventDefault();
  makeGrid();
});
