import React from "react";
import Button from "../Button/Button";
import { useSelector } from "react-redux";
import "./Standard.css";
import PropTypes from "prop-types";
function Standard(props) {
  const state = useSelector((state) => state.history);
  var bgColor = "";
  if (state.theme === true) {
    bgColor = "#4a4949";
  }
  return (
    <div id="simpleouter" style={{ backgroundColor: `${bgColor}` }}>
      <div style={{ display: "inline-block", width: "17%" }}>
        <button
          id="CE"
          value="C"
          style={{ borderRadius: "15px" }}
          className={state.theme ? "cbutton" : "darkcbutton"}
          onClick={(e) => props.calculate(e)}
        >
          C
        </button>
      </div>
      <div style={{ display: "inline-block", width: "70%" }}>
        {" "}
        <input
          type="text"
          id="simpledisplay"
          className={state.theme ? "darkdisplay" : "simpledisplay"}
          value={props.display}
          readOnly
        />
      </div>

      <Button
        className="simpleinner"
        value="7"
        id="7"
        calculate={props.calculate}
        btn={state.theme ? "darkbutton" : "blackbutton"}
      />
      <Button
        className="simpleinner"
        value="8"
        id="8"
        calculate={props.calculate}
        btn={state.theme ? "darkbutton" : "blackbutton"}
      />
      <Button
        className="simpleinner"
        value="9"
        id="9"
        calculate={props.calculate}
        btn={state.theme ? "darkbutton" : "blackbutton"}
      />
      <Button
        className="simpleinner"
        value="/"
        id="/"
        calculate={props.calculate}
        btn={state.theme ? "darkbutton" : "bluebutton"}
      />

      <Button
        className="simpleinner"
        value="4"
        id="4"
        calculate={props.calculate}
        btn={state.theme ? "darkbutton" : "blackbutton"}
      />
      <Button
        className="simpleinner"
        value="5"
        id="5"
        calculate={props.calculate}
        btn={state.theme ? "darkbutton" : "blackbutton"}
      />
      <Button
        className="simpleinner"
        value="6"
        id="6"
        calculate={props.calculate}
        btn={state.theme ? "darkbutton" : "blackbutton"}
      />
      <Button
        className="simpleinner"
        value="*"
        id="*"
        calculate={props.calculate}
        btn={state.theme ? "darkbutton" : "bluebutton"}
      />

      <Button
        className="simpleinner"
        value="1"
        id="1"
        calculate={props.calculate}
        btn={state.theme ? "darkbutton" : "blackbutton"}
      />
      <Button
        className="simpleinner"
        value="2"
        id="2"
        calculate={props.calculate}
        btn={state.theme ? "darkbutton" : "blackbutton"}
      />
      <Button
        className="simpleinner"
        value="3"
        id="3"
        calculate={props.calculate}
        btn={state.theme ? "darkbutton" : "blackbutton"}
      />
      <Button
        className="simpleinner"
        value="-"
        id="-"
        calculate={props.calculate}
        btn={state.theme ? "darkbutton" : "bluebutton"}
      />

      <Button
        className="simpleinner"
        value="0"
        id="0"
        calculate={props.calculate}
        btn={state.theme ? "darkbutton" : "blackbutton"}
      />
      <Button
        className="simpleinner"
        value="."
        id="."
        calculate={props.calculate}
        btn={state.theme ? "darkbutton" : "blackbutton"}
      />
      <Button
        className="simpleinner"
        value="="
        id="="
        calculate={props.calculate}
        btn={state.theme ? "darkbutton" : "blackbutton"}
      />
      <Button
        className="simpleinner"
        value="+"
        id="+"
        calculate={props.calculate}
        btn={state.theme ? "darkbutton" : "bluebutton"}
      />
    </div>
  );
}
Standard.propType = {
  onToggleClick: PropTypes.func,
  calculate: PropTypes.func,
  display: PropTypes.string,
  theme: PropTypes.bool,
};
export default Standard;
