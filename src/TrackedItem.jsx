import { useState, useEffect } from "react";
import { BsFillTrash3Fill, BsHourglassSplit, BsHourglassBottom } from "react-icons/bs";


function TrackedItem(props) {
    const [start, setStart] = useState(0)
    const [tracking, setTracking] = useState(false)
    const name = props.name;
    const time = localStorage.getItem(props.name);
    var timeTracked = "";

    var hours = Math.floor(time / 1000 / 60 / 60);
    if (hours > 1) {
        timeTracked += "" + hours + " hours"
    } else if (hours == 1) {
        timeTracked += "1 hour"
    }

    var mins = Math.floor((time - (hours * 60 * 60 * 1000)) / 1000 / 60);
    if(mins >= 1 && hours >= 1) {
        timeTracked += ", ";
    }
    if (mins > 1) {
        timeTracked += "" + mins + " minutes"
    } else if (mins == 1) {
        timeTracked += "1 minute"
    }


    var secs = Math.floor((time - (hours * 60 * 60 * 1000) - (mins * 60 * 1000)) / 1000);

    if((mins >= 1 || hours >= 1) && secs >= 1) {
        timeTracked += ", ";
    }
    if (secs > 1) {
        timeTracked += secs + " seconds"
    } else if (secs == 1) {
        timeTracked += "1 second"
    }
    
    const handleDelete = (event) => {
        console.log(event.target.name);
        localStorage.removeItem(event.target.name);
        window.location.reload();
    }

    const startTrack = (event) => {
        console.log(event);
        setStart(Date.now());
        setTracking(true);
        if (localStorage.getItem(event.target.name) == null) {
            localStorage.setItem(event.target.name, 0);
        }
    }

    const stopTrack = (event) => {
        setTracking(false);
        let oldTime = localStorage.getItem(event.target.name);
        console.log(parseInt(oldTime));
        console.log(Date.now() - start);

        localStorage.setItem(event.target.name, parseInt(oldTime) + (Date.now() - start))
    }

    return (
        <div className="card">
            {name}&nbsp;|&nbsp;
            {tracking == true ?

                <button name={name} onClick={stopTrack}>
                    Stop
                </button>
                :

                <button name={name} onClick={startTrack}>
                    Start
                </button>
            }
            &nbsp;|&nbsp;
            <button name={name} onClick={handleDelete}>
                Delete
            </button>

            <br />
            {timeTracked}
        </div>
    )
}

export default TrackedItem