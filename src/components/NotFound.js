import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => (
  <div
    style={{
      display: "flex",
      flexDirection: " column",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <h3 style={{ marginTop: "3%" }}>
      <Link to="/" className="ui button primary">
        Go Home
      </Link>
    </h3>
    <h1>404 - Page Not Found!</h1>
  </div>
);

export default NotFound;
