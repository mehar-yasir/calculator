import React from 'react';

function Scientific(props) {
    return (
        <div id="outer" >
        <button onClick={e => props.onToggleClick(e)}
            className="toggle">Go</button>
        <input type="text" id='display' className="display" value={props.display} readOnly />

        <div className="inner"><button id="Rad" disabled>Rad</button></div>
        <div className="inner"><button id="Deg" disabled>Deg</button></div>
        <div className="inner"><button id="x!" disabled>x!</button></div>
        <div className="inner"><button id="(" disabled>(</button></div>
        <div className="inner"><button id=")" disabled>)</button></div>
        <div className="inner"><button id="%" disabled>%</button></div>
        <div className="inner"><button id="CE" value="C" onClick={(e) => props.calculate(e)}>CE</button></div>

        <div className="inner"><button disabled>lnv</button></div>
        <div className="inner"><button disabled>sin</button></div>
        <div className="inner"><button disabled>ln</button></div>
        <div className="inner"><button value="7" id="7" onClick={(e) => props.calculate(e)}>7</button></div>
        <div className="inner"><button value="8" id="8" onClick={(e) => props.calculate(e)}>8</button></div>
        <div className="inner"><button value="9" id="9" onClick={(e) => props.calculate(e)}>9</button></div>
        <div className="inner"><button value="/" id="/" onClick={(e) => props.calculate(e)}>÷</button></div>

        <div className="inner"><button disabled>π</button></div>
        <div className="inner"><button disabled>cos</button></div>
        <div className="inner"><button disabled> log</button></div>
        <div className="inner"><button value="4" id="4" onClick={(e) => props.calculate(e)}>4</button></div>
        <div className="inner"><button value="5" id="5" onClick={(e) => props.calculate(e)}>5</button></div>
        <div className="inner"><button value="6" id="6" onClick={(e) => props.calculate(e)}>6</button></div>
        <div className="inner"><button value="*" id="*" onClick={(e) => props.calculate(e)}>×</button></div>

        <div className="inner"><button disabled>e</button></div>
        <div className="inner"><button disabled>tan</button></div>
        <div className="inner"><button disabled>√</button></div>
        <div className="inner"><button value="1" id="1" onClick={(e) => props.calculate(e)}>1</button></div>
        <div className="inner"><button value="2" id="2" onClick={(e) => props.calculate(e)}>2</button></div>
        <div className="inner"><button value="3" id="3" onClick={(e) => props.calculate(e)}>3</button></div>
        <div className="inner"><button value="-" id="-" onClick={(e) => props.calculate(e)}>-</button></div>

        <div className="inner"><button disabled>Ans</button></div>
        <div className="inner"><button disabled>EXP</button></div>
        <div className="inner"><button disabled>x^y</button></div>
        <div className="inner"><button value="0" id="0" onClick={(e) => props.calculate(e)}>0</button></div>
        <div className="inner"><button value="." id="." onClick={(e) => props.calculate(e)}>.</button></div>
        <div className="inner"><button value="=" className="bluebutton" onClick={(e) => props.calculate(e)}>=</button></div>
        <div className="inner"><button value="+" id="+" onClick={(e) => props.calculate(e)}>+</button></div>
    </div>
    );
}

export default Scientific;