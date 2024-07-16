import { useState } from "react";
import Timekeeper from "./Timekeeper";

function OnOffControl() {
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
        <button onClick={props.onClick}>Open Timekeeper</button>
    )
}

function OffButton(props) {
    return(
        <div>
            <button onClick={props.onClick}>Close Timekeeper</button>
            <Timekeeper />
        </div>
        
    )
}

export default OnOffControl;