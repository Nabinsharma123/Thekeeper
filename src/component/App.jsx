import React, { useState } from "react";
import Header from "./Header";

import InputArea from "./inputArea";
import Notes from "./Note";
import Axios from "axios";
import Popup from "./Popup";
import { useEffect } from "react";






function App() {

    const [notes, setnotes] = useState([])

    const [isdelete, setisdelete] = useState(false);
    const [deleteID, setdeleteID] = useState("");
    const [isLoad, setisLoad] = useState(true);
    const fetchData = () => {
        setisLoad(true);

        Axios.get("https://fierce-spire-14700.herokuapp.com/").then((response) => {
            setnotes(response.data.reverse());

            setisLoad(false);
        }).catch(err => console.log(err))
    }
    useEffect(() => {

        fetchData();
    }, [])




    function addNotes(newNotes) {
        setisLoad(true);
        let data = {
            title: newNotes.title,
            content: newNotes.content
        }


        Axios.post("https://fierce-spire-14700.herokuapp.com/", data).then(res => {
            if (res)
                fetchData();

        })



    }

    function updateItem(data) {
        setisLoad(true);
        Axios.post("https://fierce-spire-14700.herokuapp.com/update", data).then((res) => {
            if (res) {
                fetchData();

            }
        });

    }


    function deleteItem() {

        setisdelete(false);
        setisLoad(true);
        setnotes(notes.filter((elements) => {

            return elements._id !== deleteID;
        }));

        let data = {
            id: deleteID
        }
        Axios.post("https://fierce-spire-14700.herokuapp.com/delete", data).then((res) => {
            if (res) {
                fetchData();
            }
        });

    }

    function setdelete(id) {
        setisdelete(true);
        setdeleteID(id);

    }
    return (
        <div>
            <Header />
            <InputArea onRefresh={fetchData} onAdd={addNotes} loading={isLoad} />
            <div className="allNotes" > {notes.map((noteitems, index) => {
                return <Notes onDelete={setdelete} onUpdate={updateItem} id={noteitems._id.valueOf()} key={index} title={noteitems.title} content={noteitems.content} />
            })}</div>


            {isdelete ? <Popup onDelete={deleteItem} unDelete={() => { setisdelete(false) }} /> : ""}


        </div>

    );
}


export default App;