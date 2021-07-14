import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import PropsTypes from "prop-types";
import "./Navbar.css";
function Navbar(props) {
  const state = useSelector((state) => state.history);
  const dispatch = useDispatch();
  var path = useLocation().pathname;
  var mode = "Dark";
  var bgcolor = "black";
  if (state.theme) {
    mode = "Light";
    bgcolor = "rgba(0, 0, 0, .1)";
  }

  return (
    <div>
      {state.theme && (
        <style>{`body {background-color:rgba(0, 0, 0, .87)}`}</style>
      )}
      <ul style={{ backgroundColor: `${bgcolor}` }}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="history">History</Link>
        </li>
        <li>
          <Link to="calculator">Calculator</Link>
        </li>

        <li className="darkbtn">
          <button
            onClick={() =>
              dispatch({
                type: "CHANGE_THEME",
              })
            }
          >
            {mode}
          </button>
        </li>
        {path === "/calculator" && (
          <li className="darkbtn">
            <button
              onClick={() =>
                dispatch({
                  type: "CHANGE_CALCULATOR",
                })
              }
            >
              {state.calculator ? "Standard" : "Scientific"}
            </button>
          </li>
        )}
      </ul>
    </div>
  );
}

Navbar.propTypes = {
  theme: PropsTypes.bool,
  calculator: PropsTypes.bool,
};
export default Navbar;
