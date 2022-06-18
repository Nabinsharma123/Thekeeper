import React, { useEffect, useState } from "react";
import DeleteIcon from '@mui/icons-material/Delete';

import EditIcon from '@mui/icons-material/Edit';
import DoneIcon from '@mui/icons-material/Done';




function note(props) {


    const [Editmode, setEditmode] = useState(false);

    const [inputText, setinputText] = useState({
        "_id": "",
        title: props.title,
        content: props.content
    });



    useEffect(() => {
        setinputText({
            "_id": "",
            title: props.title,
            content: props.content
        })
    }, [Editmode])




    function Delete() {
        props.onDelete(props.id)

    }
    function edit() {

        setEditmode(!Editmode);


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

            onClick={Delete} >
            <DeleteIcon
            />
        </button>


        {Editmode ? <button onClick={updateNote}

        > <DoneIcon /> </button>

            :

            <button onClick={edit}
            > <EditIcon />  </button>}


    </div>
}

export default note;



