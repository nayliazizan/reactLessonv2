import React, {useState, useEffect} from "react";

function Timekeeper() {

    const [time, setTime] = useState(new Date().toString());
    const [flag, setFlag] = useState(true);

    //the useEffect for component mounted
    useEffect(() => {
        console.log("component mounted/updated");
        const interval = setInterval(showDate, 1000);

        //4. to clear up, write this:
        return () => {
            console.log("cleanup of interval");
            clearInterval(interval);
        }
    }, [time]);

    function showDate() {
        //2. remove this:
        //console.log(new Date().toString());
        //and put the useEffect mounted so that we dont have tons of tasks 
        //running in background and save computer memory
        
        //1. replace this: 
        //return <h1>{new Date().toString()}</h1>
        //with:
        setTime(new Date().toString());
        //so that the timekeeper on page moving
    }
    //3. remove this:
    //setInterval(showDate, 1000);
    //and put it inside useEffect

    return <div>{time}</div>
}

export default Timekeeper;