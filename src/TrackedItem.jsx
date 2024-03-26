import { useState, useEffect } from "react";
import { BsFillTrash3Fill, BsHourglassSplit, BsHourglassBottom } from "react-icons/bs";


function TrackedItem(props) {
    const [start, setStart] = useState(0)
    const [tracking, setTracking] = useState(false)
    const [time, setTime] = useState(0);
    const name = props.name;
    const timeTracked = localStorage.getItem(props.name) / 1000 / 60 / 60;

    const handleDelete = (event) => {
        console.log(event.target.name);
        localStorage.removeItem(event.target.name);
        window.location.reload();
    }

    const startTrack = (event) => {
        console.log(event);
        setStart(Date.now());
        setTracking(true);
    }

    const stopTrack = (event) => {
        setTracking(false);
        let startingTime = (localStorage.getItem(event.target.name) == null) ? 
        0 : localStorage.getItem(event.target.name);

        localStorage.setItem(event.target.name, startingTime + (Date.now() - start));
        window.location.reload();
    }

    return (
        <div className="card">
            {name} | 
            {tracking == true ?

                <button name = {name} onClick={stopTrack}>
                    Stop tracking
                </button>
                :

                <button name = {name} onClick={startTrack}>
                    Start tracking
                </button>
            } | 
            <button name = {name} onClick={handleDelete}>
                Delete item
            </button>

            <br/>
            {timeTracked}
        </div>
    )
}

export default TrackedItem