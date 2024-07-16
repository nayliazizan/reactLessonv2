import React, {useState, useEffect} from "react";

function Timekeeper() {

    const [time, setTime] = useState(new Date());

    useEffect(() => {
        console.log("component mounted/updated");
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => {
            console.log("cleanup of interval");
            clearInterval(interval);
        }
    }, [time]);

    const hours = time.getHours().toString().padStart(2, '0');
    const minutes = time.getMinutes().toString().padStart(2, '0');
    const seconds = time.getSeconds().toString().padStart(2, '0');

    return (
        <div className="App">
            <h1 align="center" style={{marginTop:'30px'}}>Time Now:</h1>
            <h1 align="center">{hours}:{minutes}:{seconds}</h1>
        </div>
    );
}

export default Timekeeper;