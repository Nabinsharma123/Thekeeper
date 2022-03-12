import React, { useState } from "react";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import DeleteIcon from '@mui/icons-material/Delete';
import { Input } from "@mui/material";
import Axios from "axios";
import EditIcon from '@mui/icons-material/Edit';
import DoneIcon from '@mui/icons-material/Done';




function note(props) {

    const [isOver_edit, setOver_edit] = useState(false);
    const [isOver_delete, setOver_delete] = useState(false);
    const [Editmode, setEditmode] = useState(false);

    const [inputText, setinputText] = useState({
        "_id": "",
        title: props.heading,
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
            let data={
                _id:props.id,
                title:inputText.title,
                content:inputText.content
                 
            }
            Axios.post("https://fierce-spire-14700.herokuapp.com/update",data)
           
        edit()
        event.preventDefault()
        setOver_edit(false)
    }

    return <div className="note  " >
           {Editmode? 
           
           <form className="editnote" >
           <input name="title" value={inputText.title} onChange={HandelChange} />
           <textarea name="content" value={inputText.content} onChange={HandelChange} />
            </form>


           :
           <div>
           <h1> {props.heading}</h1>
                <p>{props.content}</p>
                </div>}
              
        <button onMouseOver={MouseOver_delete}
            onMouseOut={MouseOut_delete}
            onClick={Delete} >
            <DeleteIcon
                fontSize={isOver_delete ? "large" : "medium"} />
        </button>
       {Editmode? <button onClick={updateNote}
        onMouseOver={MouseOver_edit}
            onMouseOut={MouseOut_edit} 
              > <DoneIcon fontSize={isOver_edit ? "large" : "medium"} /> </button> 
       :
        <button onClick={edit}  onMouseOver={MouseOver_edit}
            onMouseOut={MouseOut_edit} > <EditIcon fontSize={isOver_edit ? "large" : "medium"} />  </button>} 
       

    </div>
}

export default note;



