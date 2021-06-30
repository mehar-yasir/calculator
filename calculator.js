
// select all the buttons
const buttons = document.querySelectorAll('button');

const display = document.getElementById('display');

buttons.forEach(function (button) {
  button.addEventListener('click', calculate);
});
buttons.forEach(function (button) {
  //button.addEventListener('mouseout', mounseAway);
});

// calculate function
function calculate(event) {
  const clickedButtonValue = event.target.value;
  //change color
  const btn = document.getElementById(clickedButtonValue);
  console.log(clickedButtonValue);
  if (btn !==null) {
    btn.style.backgroundColor = "royalblue";
    btn.style.color="white";
    setTimeout(function () { btn.style.backgroundColor = "lightgray";
    btn.style.color="black";
   }, 500);
  }
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
