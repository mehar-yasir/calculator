import React from 'react';
import './App.css';
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            display: '',
            toggle: true
        };
    }

    calculate = (event) => {
        console.log('inside calculate');


        const clickedButtonValue = event.target.value;
        console.log(clickedButtonValue);

        if (clickedButtonValue === '=') {

            if (this.state.display !== '') {
                //calculate result

                this.setState({ display: eval(this.state.display) });
            }
        } else if (clickedButtonValue === 'C') {

            this.setState({ display: '' });
        } else {
            let newVal = this.state.display + clickedButtonValue;
            this.setState({ display: newVal });
        }
        console.log(this.state.display);

    }
    //on toggle click
    onToggleClick = (e) => {

        this.setState({
            toggle: !this.state.toggle,
            display: ''
        });
    }
    render() {

        if (this.state.toggle === true) {
            return (
                <div style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}>
                    <div id="outer" >
                        <button onClick={e => this.onToggleClick(e)}
                            className="toggle">Go</button>
                        <input type="text" id='display' className="display" value={this.state.display} readOnly />

                        <div className="inner"><button id="Rad" disabled>Rad</button></div>
                        <div className="inner"><button id="Deg" disabled>Deg</button></div>
                        <div className="inner"><button id="x!" disabled>x!</button></div>
                        <div className="inner"><button id="(" disabled>(</button></div>
                        <div className="inner"><button id=")" disabled>)</button></div>
                        <div className="inner"><button id="%" disabled>%</button></div>
                        <div className="inner"><button id="CE" value="C" onClick={(e) => this.calculate(e)}>CE</button></div>

                        <div className="inner"><button disabled>lnv</button></div>
                        <div className="inner"><button disabled>sin</button></div>
                        <div className="inner"><button disabled>ln</button></div>
                        <div className="inner"><button value="7" id="7" onClick={(e) => this.calculate(e)}>7</button></div>
                        <div className="inner"><button value="8" id="8" onClick={(e) => this.calculate(e)}>8</button></div>
                        <div className="inner"><button value="9" id="9" onClick={(e) => this.calculate(e)}>9</button></div>
                        <div className="inner"><button value="/" id="/" onClick={(e) => this.calculate(e)}>÷</button></div>

                        <div className="inner"><button disabled>π</button></div>
                        <div className="inner"><button disabled>cos</button></div>
                        <div className="inner"><button disabled> log</button></div>
                        <div className="inner"><button value="4" id="4" onClick={(e) => this.calculate(e)}>4</button></div>
                        <div className="inner"><button value="5" id="5" onClick={(e) => this.calculate(e)}>5</button></div>
                        <div className="inner"><button value="6" id="6" onClick={(e) => this.calculate(e)}>6</button></div>
                        <div className="inner"><button value="*" id="*" onClick={(e) => this.calculate(e)}>×</button></div>

                        <div className="inner"><button disabled>e</button></div>
                        <div className="inner"><button disabled>tan</button></div>
                        <div className="inner"><button disabled>√</button></div>
                        <div className="inner"><button value="1" id="1" onClick={(e) => this.calculate(e)}>1</button></div>
                        <div className="inner"><button value="2" id="2" onClick={(e) => this.calculate(e)}>2</button></div>
                        <div className="inner"><button value="3" id="3" onClick={(e) => this.calculate(e)}>3</button></div>
                        <div className="inner"><button value="-" id="-" onClick={(e) => this.calculate(e)}>-</button></div>

                        <div className="inner"><button disabled>Ans</button></div>
                        <div className="inner"><button disabled>EXP</button></div>
                        <div className="inner"><button disabled>x^y</button></div>
                        <div className="inner"><button value="0" id="0" onClick={(e) => this.calculate(e)}>0</button></div>
                        <div className="inner"><button value="." id="." onClick={(e) => this.calculate(e)}>.</button></div>
                        <div className="inner"><button value="=" className="bluebutton" onClick={(e) => this.calculate(e)}>=</button></div>
                        <div className="inner"><button value="+" id="+" onClick={(e) => this.calculate(e)}>+</button></div>
                    </div>
                </div>)
        } else {
            return (<div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}>
                <div id="simpleouter">
                    <div style={{ width: '20%', float: 'right' }}> <button onClick={e => this.onToggleClick(e)} class="bluebutton">Go</button></div>

                    <div style={{ display: "inline-block", width: '17%' }}><button id="CE" value="C" style={{ borderRadius: '15px' }} className="cbutton" onClick={(e) => this.calculate(e)}>C</button></div>
                    <div style={{ display: "inline-block", width: '58%' }}> <input type="text" id='simpledisplay' className="display" value={this.state.display} readOnly /></div>


                    <div className="simpleinner"><button value="7" id="7" className="blackbutton" onClick={(e) => this.calculate(e)}>7</button></div>
                    <div className="simpleinner"><button value="8" id="8" className="blackbutton" onClick={(e) => this.calculate(e)}>8</button></div>
                    <div className="simpleinner"><button value="9" id="9" className="blackbutton" onClick={(e) => this.calculate(e)}>9</button></div>
                    <div className="simpleinner"><button value="/" id="/" className="bluebutton" onClick={(e) => this.calculate(e)}>÷</button>
                    </div>


                    <div className="simpleinner"><button value="4" id="4" className="blackbutton" onClick={(e) => this.calculate(e)}>4</button></div>
                    <div className="simpleinner"><button value="5" id="5" className="blackbutton" onClick={(e) => this.calculate(e)}>5</button></div>
                    <div className="simpleinner"><button value="6" id="6" className="blackbutton" onClick={(e) => this.calculate(e)}>6</button></div>
                    <div className="simpleinner"><button value="*" id="*" className="bluebutton" onClick={(e) => this.calculate(e)}>×</button></div>


                    <div className="simpleinner"><button value="1" id="1" className="blackbutton" onClick={(e) => this.calculate(e)}>1</button></div>
                    <div className="simpleinner"><button value="2" id="2" className="blackbutton" onClick={(e) => this.calculate(e)}>2</button></div>
                    <div className="simpleinner"><button value="3" id="3" className="blackbutton" onClick={(e) => this.calculate(e)}>3</button></div>
                    <div className="simpleinner"><button value="-" id="-" className="bluebutton" onClick={(e) => this.calculate(e)}>-</button></div>


                    <div className="simpleinner"><button value="0" id="0" className="blackbutton" onClick={(e) => this.calculate(e)}>0</button></div>
                    <div className="simpleinner"><button value="." id="." className="bluebutton" onClick={(e) => this.calculate(e)}>.</button></div>
                    <div className="simpleinner"><button value="=" className="bluebutton" onClick={(e) => this.calculate(e)}>=</button></div>
                    <div className="simpleinner"><button value="+" id="+" className="bluebutton" onClick={(e) => this.calculate(e)}>+</button></div>
                </div>
            </div >
            );
        }
    }
}
export default App;