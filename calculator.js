
// select all the buttons
const buttons = document.querySelectorAll('button');

const display = document.getElementById('display');

buttons.forEach(function(button) {
  button.addEventListener('click', calculate);
});

// calculate function
function calculate(event) {
  const clickedButtonValue = event.target.value;

  if (clickedButtonValue === '=') {

    if (display.value !== '') {
//calculate result
      display.value = eval(display.value);
    }
  } else if (clickedButtonValue === 'C') {

    display.value = '';
  } else {
  
    display.value += clickedButtonValue;
  }
  console.log(display.value);
 
}