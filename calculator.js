
// select all the buttons
const buttons = document.querySelectorAll('button');
var display;
display = document.getElementById("simpledisplay");
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

  if (btn !== null) {
    btn.style.backgroundColor = "royalblue";
    btn.style.color = "white";
    setTimeout(function () {
      btn.style.backgroundColor = "lightgray";
      btn.style.color = "black";
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
//ontoggle click
function onToggleClick() {

  const outer = document.getElementById("outer").style.display;
  if (outer == "") {
    document.getElementById("outer").style.display = "none";
    document.getElementById("simpleouter").style.display = "";
    document.querySelector("body").style.backgroundColor = "lightblue";
    //change display
    display.value = "";
    display = document.getElementById("simpledisplay");
 

  } else {
    document.getElementById("outer").style.display = "";
    document.getElementById("simpleouter").style.display = "none";
    document.querySelector("body").style.backgroundColor = "white";
    //change display
    display.value= "";
    display = document.getElementById("display");
   

  }

}