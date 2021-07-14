import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Scientific from "./Scientific/Scientific";
import Standard from "./Standard/Standard";

function Calculator(props) {
  const state = useSelector((state) => state.history);
  const dispatch = useDispatch();
  const [toggle, onToggle] = useState(true);
  const [display, onDisplay] = useState("");
  //ontoggle click
  const onToggleClick = (e) => {
    onToggle(!toggle);
    onDisplay("");
  };
  //calculate
  const calculate = (event) => {
    const clickedButtonValue = event.target.value;

    if (clickedButtonValue === "=") {
      var lastChar = display[display.length - 1];
      if (
        display !== "" &&
        lastChar !== "+" &&
        lastChar !== "-" &&
        lastChar !== "/" &&
        lastChar !== "*"
      ) {
        //calculate result
        const result = eval(display);
        const history = display + " = " + result;
        dispatch({
          type: "ADD_HISTORY",
          payload: history,
        });
        onDisplay(result);
      }
    } else if (clickedButtonValue === "C") {
      onDisplay("");
    } else {
      let newVal = display + clickedButtonValue;
      onDisplay(newVal);
    }
  };
  return (
    <div className="ui container">
      <div
        style={{
          marginTop: "5%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {state.calculator === true ? (
          <Scientific
            onToggleClick={onToggleClick}
            calculate={calculate}
            display={display}
          />
        ) : (
          <Standard
            onToggleClick={onToggleClick}
            calculate={calculate}
            display={display}
          />
        )}
      </div>
    </div>
  );
}
export default Calculator;
