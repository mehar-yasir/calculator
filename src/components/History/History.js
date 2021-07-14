import React from "react";
import "./History.css";
import { useSelector } from "react-redux";
function History(props) {
  const state = useSelector((state) => state.history);
  var bgColor = "";
  if (state.theme === true) {
    bgColor = "#4a4949";
  }
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
        <div className={state.theme ? "darkhistoryouter" : "historyouter"}>
          <h1 className={state.theme ? "darkheading" : "heading"}>
            Recent Calculations
          </h1>
          <table
            className="ui striped table"
            style={{ backgroundColor: `${bgColor}` }}
          >
            <tbody>
              {state.history.map((hist, index) => {
                var split = hist.split("=");
                return (
                  <tr className="center aligned" key={index}>
                    <td className={state.theme ? "darkhistory" : "history"}>
                      <button
                        className={
                          state.theme
                            ? "darkhistorybutton"
                            : "lighthistorybutton"
                        }
                      >
                        {split[0]}
                      </button>
                      =
                      <button
                        className={
                          state.theme
                            ? "darkhistorybutton"
                            : "lighthistorybutton"
                        }
                      >
                        {split[1]}
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default History;
