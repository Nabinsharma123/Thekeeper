import React, { useState } from "react";
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Zoom from '@mui/material/Zoom';


function inputArea(props) {



    const [inputText, setinputText] = useState({
        "_id": "",
        title: "",
        content: ""
    });
    const [isExpanded, setisExpanded] = useState(false);
    function expand() {
        setisExpanded(true)
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
    function submitNote(event) {
        if (!(inputText.title === "" && inputText.content === "")) {
            props.onAdd(inputText)
            setinputText({ title: "", content: "" });
        }
        event.preventDefault();
    }

    return (
        <div >
            <form className="create-note" >
                {isExpanded ?
                    <input name="title"
                        onChange={HandelChange}
                        placeholder="Title"
                        type="text" value={inputText.title} />
                    : null}


                <textarea name="content"
                    onClick={expand}
                    onChange={HandelChange}
                    placeholder="Take a note....."
                    rows={isExpanded ? 3 : 1}
                    value={inputText.content}

                />

                <Zoom in={isExpanded} >
                    <Fab onClick={submitNote} > <AddIcon /> </Fab>
                </Zoom>

            </form>

        </div>
    )
}

export default inputArea;