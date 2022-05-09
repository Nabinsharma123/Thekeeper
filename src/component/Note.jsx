import React, { useEffect, useState } from "react";
import DeleteIcon from '@mui/icons-material/Delete';

import EditIcon from '@mui/icons-material/Edit';
import DoneIcon from '@mui/icons-material/Done';




function note(props) {

    const [isOver_edit, setOver_edit] = useState(false);
    const [isOver_delete, setOver_delete] = useState(false);
    const [Editmode, setEditmode] = useState(false);

    const [inputText, setinputText] = useState({
        "_id": "",
        title: props.title,
        content: props.content
    });



    function MouseOver_edit() {
        setOver_edit(true);
    }
    function MouseOut_edit() {
        setOver_edit(false);
    }
    function MouseOver_delete() {
        setOver_delete(true);
    }
    function MouseOut_delete() {
        setOver_delete(false);
    }



    function Delete() {
        props.onDelete(props.id)

    }
    function edit() {

        setEditmode(!Editmode);
        setOver_edit(false)

    }

    function HandelChange(event) {
        const { name, value } = event.target;
        setinputText((prevNote) => {
            return {
                ...prevNote,
                [name]: value,
            }
        });
    }

    function updateNote(event) {
        let data = {
            _id: props.id,
            title: inputText.title,
            content: inputText.content

        }
        props.onUpdate(data);
        edit()
        event.preventDefault()
        setOver_edit(false)
    }




    return <div className="note  " >
        {Editmode ?

            <form className="editnote" >
                <input name="title" value={inputText.title} onChange={HandelChange} />
                <textarea autoFocus name="content" value={inputText.content} onChange={HandelChange} />
            </form>


            :
            <div>
                <h1> {props.title}</h1>
                <p>{props.content}</p>
            </div>}

        <button
            onMouseOver={MouseOver_delete}
            onMouseOut={MouseOut_delete}
            onClick={Delete} >
            <DeleteIcon
                fontSize={isOver_delete ? "large" : "medium"} />
        </button>


        {Editmode ? <button onClick={updateNote}
            onMouseOver={MouseOver_edit}
            onMouseOut={MouseOut_edit}
        > <DoneIcon fontSize={isOver_edit ? "large" : "medium"} /> </button>

            :

            <button onClick={edit} onMouseOver={MouseOver_edit}
                onMouseOut={MouseOut_edit} > <EditIcon fontSize={isOver_edit ? "large" : "medium"} />  </button>}


    </div>
}

export default note;



