import React, { useState } from "react";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import DeleteIcon from '@mui/icons-material/Delete';


function note(props) {

    const [isOver, setOver] = useState(false);

    function MouseOver() {
        setOver(true);
    }
    function MouseOut() {
        setOver(false);
    }


    function HandelChange() {
        props.onDelete(props.id)
    }


    return <div className="note">
        <h1> {props.heading}</h1>
        <p>{props.content}</p>
        <button onMouseOver={MouseOver}
            onMouseOut={MouseOut}
            onClick={HandelChange} >
            <DeleteIcon
                fontSize={isOver ? "large" : "medium"} />
        </button>
    </div>
}

export default note;



