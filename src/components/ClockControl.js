import { useState } from "react";
import Clock from "./Clock.js";

function ClockControl() {
    const [isOn, setIsOn] = useState(false);
    const handleOnClick = () => {
        setIsOn(true);
    };
    const handleOffClick = () => {
        setIsOn(false);
    };

    let button;
    if(isOn) {
        button = <OffButton onClick={handleOffClick}/>
    } else {
        button = <OnButton onClick={handleOnClick}/>
    }

    return <div>{button}</div>;
}

function OnButton(props) {
    return(
        <div>
            <h1>Time Now:</h1>
            <button className="ui secondary basic button" onClick={props.onClick}>Turn on clock</button>
            <h1>Clock is off</h1>
        </div>
    )
}

function OffButton(props) {
    return(
        <div>
            <h1>Time Now:</h1>
            <button className="ui secondary basic button" onClick={props.onClick}>
                Turn off clock
            </button>
            <Clock />
        </div>
        
    )
}

export default ClockControl;