import React, { useState } from "react";
import Header from "./Header";

import InputArea from "./inputArea";
import Notes from "./Note";
import Axios from "axios";
import Popup from "./Popup";
import Loading from "./loading";
import { useEffect } from "react";
import note from "./Note";




function App() {

    const [notes, setnotes] = useState([])
    const [isAdd, setisAdd] = useState(false);
    const isAddToggle = () => {
        setisAdd(!isAdd);
    }
    const [isdelete, setisdelete] = useState(false);
    const [deleteID, setdeleteID] = useState("");
    const [isLoad, setisLoad] = useState(true);
    const fetchData = () => {
        Axios.get("https://fierce-spire-14700.herokuapp.com/").then((response) => {
          setnotes(response.data)
          console.log(response.data);
          setisLoad(false);
      }).catch(err => console.log(err))
    }
    useEffect(() => {
      
        fetchData();
    }, [isAdd])
    
    


    function addNotes(newNotes) {
        setisLoad(true);
        let data = {
            title: newNotes.title,
            content: newNotes.content
        }
        Axios.post("https://fierce-spire-14700.herokuapp.com/", data).then(res => {
            isAddToggle();
        })
        
        

    }

    function deleteItem() {
        setisLoad(true);
        let data = {
            id: deleteID
        }
        Axios.post("https://fierce-spire-14700.herokuapp.com/delete", data)
            let delresult = notes.find(obj => {
            return obj.id === deleteID
            })
        notes.pop(delresult);  
        setisdelete(false)
        // fetchData();
        
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
            {
                isLoad?<Loading></Loading>:<></>
            }

        </div>

    );
}


export default App;