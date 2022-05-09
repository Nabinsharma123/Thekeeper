import React, { useState } from "react";
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Zoom from '@mui/material/Zoom';
import Loading from "./loading";
import Cloud from "./Cloud";


function inputArea(props) {



    const [inputText, setinputText] = useState({
        "_id": "",
        title: "",
        content: ""
    });
    const [isExpanded, setisExpanded] = useState(false);




    function expand() {
        setisExpanded(!isExpanded)
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
            <form className="create-note"  >
                {props.loading ? <Loading />

                    :

                    <button className="refresh_button" onClick={() => { props.onRefresh(); }} ><Cloud /></button>}
                {isExpanded ? <div>

                    <input name="title"

                        onChange={HandelChange}
                        placeholder="Title"
                        type="text" value={inputText.title} />

                    <textarea name="content"

                        autoFocus
                        onChange={HandelChange}
                        placeholder="Take a note....."
                        rows={isExpanded ? 3 : 1}
                        value={inputText.content}
                    />
                </div>
                    :

                    <input name="title"
                        onClick={expand}
                        placeholder="Take a note....."
                        type="text" />}

                <Zoom className="addIcon" in={isExpanded} >
                    <Fab onClick={submitNote} > <AddIcon /> </Fab>
                </Zoom>

            </form>

        </div>
    )
}

export default inputArea;