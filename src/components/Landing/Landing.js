import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import background from "../../assets/showcase.jpg";
import "./Landing.css";
import Footer from "../Footer/Footer";
function Landing(props) {
  const state = useSelector((state) => state.history);
  var bgColor = "";
  var lightgrey = "";
  if (state.theme === true) {
    bgColor = "#4a4949";
    lightgrey = "rgb(110, 110, 110)";
  }
  return (
    <section>
      <div
        style={{
          backgroundImage: `url(${background})`,
          height: "90vh",
        }}
      >
        <div className="landing-inner" style={{ opacity: "1" }}>
          <p className="lead" style={{ fontSize: "2rem" }}>
            Calculator with scientific functionality and capabilty of storing
            recent calculations.
          </p>
          <div>
            <Link
              to="history"
              className="ui button primary"
              style={{ backgroundColor: `${bgColor}` }}
            >
              history
            </Link>
            <Link
              to="calculator"
              className="ui button primary"
              style={{ marginLeft: "1rem", backgroundColor: `${bgColor}` }}
            >
              calculator
            </Link>
          </div>
        </div>
        <Footer lightgrey={lightgrey} />
      </div>
    </section>
  );
}
export default Landing;
