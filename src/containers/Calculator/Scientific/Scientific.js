import React from "react";
import Button from "../Button/Button";
import "./Scientific.css";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
function Scientific(props) {
  const state = useSelector((state) => state.history);
  var bgColor = "";
  var darkbtn = "";
  if (state.theme === true) {
    bgColor = "#4a4949";
    darkbtn = "darkbutton";
  }

  return (
    <div className="outer" style={{ backgroundColor: `${bgColor}` }}>
      <input
        type="text"
        id="display"
        className={state.theme ? "scdarkdisplay" : "display"}
        value={props.display}
        readOnly
      />

      <Button className="inner" btn={darkbtn} value="Rad" status="disabled" />
      <Button className="inner" btn={darkbtn} value="Deg" status="disabled" />
      <Button className="inner" btn={darkbtn} value="X!" status="disabled" />
      <Button className="inner" btn={darkbtn} value="(" status="disabled" />
      <Button className="inner" btn={darkbtn} value=")" status="disabled" />
      <Button className="inner" btn={darkbtn} value="%" status="disabled" />
      <Button
        className="inner"
        btn={darkbtn}
        value="C"
        id="CE"
        calculate={props.calculate}
      />

      <Button className="inner" btn={darkbtn} value="lnv" status="disabled" />
      <Button className="inner" btn={darkbtn} value="sin" status="disabled" />
      <Button className="inner" btn={darkbtn} value="ln" status="disabled" />
      <Button
        className="inner"
        btn={darkbtn}
        value="7"
        id="7"
        calculate={props.calculate}
      />
      <Button
        className="inner"
        btn={darkbtn}
        value="8"
        id="8"
        calculate={props.calculate}
      />
      <Button
        className="inner"
        btn={darkbtn}
        value="9"
        id="9"
        calculate={props.calculate}
      />
      <Button
        className="inner"
        btn={darkbtn}
        value="/"
        id="/"
        calculate={props.calculate}
      />

      <Button className="inner" btn={darkbtn} value="π" status="disabled" />
      <Button className="inner" btn={darkbtn} value="cos" status="disabled" />
      <Button className="inner" btn={darkbtn} value="log" status="disabled" />
      <Button
        className="inner"
        btn={darkbtn}
        value="4"
        id="4"
        calculate={props.calculate}
      />
      <Button
        className="inner"
        btn={darkbtn}
        value="5"
        id="5"
        calculate={props.calculate}
      />
      <Button
        className="inner"
        btn={darkbtn}
        value="6"
        id="6"
        calculate={props.calculate}
      />
      <Button
        className="inner"
        btn={darkbtn}
        value="*"
        id="*"
        calculate={props.calculate}
      />

      <Button className="inner" btn={darkbtn} value="e" status="disabled" />
      <Button className="inner" btn={darkbtn} value="tan" status="disabled" />
      <Button className="inner" btn={darkbtn} value="√" status="disabled" />
      <Button
        className="inner"
        btn={darkbtn}
        value="1"
        id="1"
        calculate={props.calculate}
      />
      <Button
        className="inner"
        btn={darkbtn}
        value="2"
        id="2"
        calculate={props.calculate}
      />
      <Button
        className="inner"
        btn={darkbtn}
        value="3"
        id="3"
        calculate={props.calculate}
      />
      <Button
        className="inner"
        btn={darkbtn}
        value="-"
        id="-"
        calculate={props.calculate}
      />

      <Button className="inner" btn={darkbtn} value="Ans" status="disabled" />
      <Button className="inner" btn={darkbtn} value="Exp" status="disabled" />
      <Button className="inner" btn={darkbtn} value="x^y" status="disabled" />
      <Button
        className="inner"
        btn={darkbtn}
        value="0"
        id="0"
        calculate={props.calculate}
      />
      <Button
        className="inner"
        btn={darkbtn}
        value="."
        id="."
        calculate={props.calculate}
      />
      <Button
        className="inner"
        btn={darkbtn}
        value="="
        id="="
        calculate={props.calculate}
      />
      <Button
        className="inner"
        btn={darkbtn}
        value="+"
        id="+"
        calculate={props.calculate}
      />
    </div>
  );
}
Scientific.propType = {
  onToggleClick: PropTypes.func,
  calculate: PropTypes.func,
  display: PropTypes.string,
};
export default Scientific;
