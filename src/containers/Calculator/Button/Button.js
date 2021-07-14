import React from "react";
import PropTypes from "prop-types";

function Button(props) {
  if (props.status === "disabled") {
    return (
      <div className={props.className}>
        <button
          className={props.btn}
          value={props.value}
          id={props.id}
          disabled
        >
          {props.value}
        </button>
      </div>
    );
  } else {
    return (
      <div className={props.className}>
        <button
          className={props.btn}
          value={props.value}
          id={props.id}
          onClick={(e) => props.calculate(e)}
        >
          {props.value}
        </button>
      </div>
    );
  }
}
Button.propType = {
  className: PropTypes.string,
  btn: PropTypes.string,
  id: PropTypes.string,
  value: PropTypes.number,
  calculate: PropTypes.func,
  status: PropTypes.string,
};

export default Button;
