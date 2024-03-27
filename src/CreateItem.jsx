import { useState, useEffect } from "react";

function CreateItem() {
    const [item, setItem] = useState("")

    const handleChange = (event) => {
        setItem(event.target.value);
    }

    const handleClick = () => {
        if(item != "") {
            localStorage.setItem(item, 0);
            window.dispatchEvent(new Event('storage'));
            window.location.reload();
        }
    }

    return(
        <div className="card">
            <input onChange ={handleChange} value = {item}></input>
            <button onClick={handleClick}>
            +
            </button>
        </div>
    )
}

export default CreateItem