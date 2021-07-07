import React from 'react';

function Standard(props) {
    return (
        <div id="simpleouter">
            <div style={{ width: '20%', float: 'right' }}> <button onClick={e =>props.onToggleClick(e)} className="bluebutton">Go</button></div>

            <div style={{ display: "inline-block", width: '17%' }}><button id="CE" value="C" style={{ borderRadius: '15px' }} className="cbutton" onClick={(e) => props.calculate(e)}>C</button></div>
            <div style={{ display: "inline-block", width: '58%' }}> <input type="text" id='simpledisplay' className="display" value={props.display} readOnly /></div>


            <div className="simpleinner"><button value="7" id="7" className="blackbutton" onClick={(e) => props.calculate(e)}>7</button></div>
            <div className="simpleinner"><button value="8" id="8" className="blackbutton" onClick={(e) => props.calculate(e)}>8</button></div>
            <div className="simpleinner"><button value="9" id="9" className="blackbutton" onClick={(e) => props.calculate(e)}>9</button></div>
            <div className="simpleinner"><button value="/" id="/" className="bluebutton" onClick={(e) => props.calculate(e)}>÷</button>
            </div>


            <div className="simpleinner"><button value="4" id="4" className="blackbutton" onClick={(e) => props.calculate(e)}>4</button></div>
            <div className="simpleinner"><button value="5" id="5" className="blackbutton" onClick={(e) => props.calculate(e)}>5</button></div>
            <div className="simpleinner"><button value="6" id="6" className="blackbutton" onClick={(e) => props.calculate(e)}>6</button></div>
            <div className="simpleinner"><button value="*" id="*" className="bluebutton" onClick={(e) => props.calculate(e)}>×</button></div>


            <div className="simpleinner"><button value="1" id="1" className="blackbutton" onClick={(e) => props.calculate(e)}>1</button></div>
            <div className="simpleinner"><button value="2" id="2" className="blackbutton" onClick={(e) => props.calculate(e)}>2</button></div>
            <div className="simpleinner"><button value="3" id="3" className="blackbutton" onClick={(e) => props.calculate(e)}>3</button></div>
            <div className="simpleinner"><button value="-" id="-" className="bluebutton" onClick={(e) => props.calculate(e)}>-</button></div>


            <div className="simpleinner"><button value="0" id="0" className="blackbutton" onClick={(e) => props.calculate(e)}>0</button></div>
            <div className="simpleinner"><button value="." id="." className="bluebutton" onClick={(e) => props.calculate(e)}>.</button></div>
            <div className="simpleinner"><button value="=" className="bluebutton" onClick={(e) => props.calculate(e)}>=</button></div>
            <div className="simpleinner"><button value="+" id="+" className="bluebutton" onClick={(e) => props.calculate(e)}>+</button></div>
        </div>
    );
}

export default Standard;