import React, { useState } from 'react';
import './App.css';
import Scientific from './Scientific';
import Standard from './Standard';

function App(props) {
    const [toggle, onToggle] = useState(true);
    const [display, onDisplay] = useState('');
    //ontoggle click
    const onToggleClick = (e) => {

        onToggle(!toggle);
        onDisplay('');

    }
    //calculate
    const calculate = (event) => {

        const clickedButtonValue = event.target.value;
        console.log(clickedButtonValue);

        if (clickedButtonValue === '=') {

            if (display !== '') {
                //calculate result

                onDisplay(eval(display));
            }
        } else if (clickedButtonValue === 'C') {

            onDisplay('');

        } else {
            let newVal = display + clickedButtonValue;
            onDisplay(newVal);

        }
        console.log(display);

    }
    return (
        <div style={{
            marginTop: '5%',
            display: "flex",
            justifyContent: "center",
            alignItems: "center",

        }}> 
        {toggle === true ? (
        <Scientific onToggleClick={onToggleClick} calculate={calculate} display={display} />
        ) : (
        <Standard onToggleClick={onToggleClick} calculate={calculate} display={display} />
        )}
        </div>
    );

}

export default App;