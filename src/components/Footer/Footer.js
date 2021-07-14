import React from "react";
import PropTypes from "prop-types";
import "./Footer.css";
function Footer(props) {
  return (
    <footer>
      <div className="footerContent">
        <h3>TechnoSoft Solutions</h3>
        <p>
          Link to github code
          <a
            href="https://github.com/Technosoft-Solutions/react-calculator"
            style={{ marginLeft: "10px", color: `${props.lightgrey}` }}
            target="_blank"
            rel="noreferrer"
          >
            click here
          </a>
        </p>
      </div>
      <ul className="socials">
        <li>
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
            <i className="facebook icon"></i>
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
            <i className="youtube icon"></i>
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
            <i className="instagram icon"></i>
          </a>
        </li>
        <li>
          <a href="https://www.twitter.com/" target="_blank" rel="noreferrer">
            <i className="twitter icon"></i>
          </a>
        </li>
        <li>
          <a href="https://www.gmail.com/" target="_blank" rel="noreferrer">
            <i className="google icon"></i>
          </a>
        </li>
      </ul>
      <div className="footerBottom">
        <p>
          copyright &copy;2020 TechnoSoft. designed by{" "}
          <span>TechnoSoft Solutions.</span>
        </p>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  lightgrey: PropTypes.string,
};
export default Footer;
