import React, {useState, useEffect} from "react";

function Clock() {

    const [time, setTime] = useState(new Date());

    useEffect(() => {
        
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => {
            clearInterval(interval);
        }
    }, [time]);

    const hours = time.getHours().toString().padStart(2, '0');
    const minutes = time.getMinutes().toString().padStart(2, '0');
    const seconds = time.getSeconds().toString().padStart(2, '0');

    return (
        <div className="App">
            <h1>Time Now:</h1>
            <h1 style={{marginTop:'20px'}}>{hours}:{minutes}:{seconds}</h1>
        </div>
    );
}

export default Clock;