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
        setStart(Date.now());
        setTracking(true);
    }

    const stopTrack = (event) => {
        setTracking(false);
        localStorage.setItem(event.target.name, Date.now() - start);
        window.location.reload();
    }

    return (
        <div className="card">
            {name}    
            {tracking == true ?

                <button name = {name} onClick={stopTrack}>
                    <BsHourglassSplit />
                </button>
                :

                <button name = {name} onClick={startTrack}>
                    <BsHourglassBottom />
                </button>
            }
            <button name = {name} onClick={handleDelete}>
                <BsFillTrash3Fill />
            </button>

            <br/>
            {timeTracked}
        </div>
    )
}

export default TrackedItem