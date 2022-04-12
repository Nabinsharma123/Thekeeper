import React, { useState } from "react";
import Header from "./Header";

import InputArea from "./inputArea";
import Notes from "./Note";
import Axios from "axios";
import Popup from "./Popup";




function App() {

    const [notes, setnotes] = useState([])
    const [isdelete, setisdelete] = useState(false);
    const [deleteID, setdeleteID] = useState("");

    Axios.get("https://fierce-spire-14700.herokuapp.com/").then((response) => {
        setnotes(response.data)
    }).catch(err => console.log(err))


    function addNotes(newNotes) {
        let data = {
            title: newNotes.title,
            content: newNotes.content
        }
        Axios.post("https://fierce-spire-14700.herokuapp.com/", data);
    }

    function deleteItem() {
        let data = {
            id: deleteID
        }
        Axios.post("https://fierce-spire-14700.herokuapp.com/delete", data);

        setisdelete(false)
    }

    function setdelete(id) {
        setisdelete(true);
        setdeleteID(id);
    }
    return (
        <div>
            <Header />
            <InputArea onAdd={addNotes} />
            <div className="allNotes" > {notes.map((noteitems, index) => {
                return <Notes onDelete={setdelete} id={noteitems._id.valueOf()} key={index} heading={noteitems.title} content={noteitems.content} />
            })}</div>


            {isdelete ? <Popup onDelete={deleteItem} unDelete={() => { setisdelete(false) }} /> : ""}

        </div>

    );
}


export default App;