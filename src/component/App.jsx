import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import InputArea from "./inputArea";
import Notes from "./Note";
import Axios from "axios";





function App() {

    const [notes, setnotes] = useState([])

  Axios.get("https://fierce-spire-14700.herokuapp.com/").then((response)=>{
      setnotes(response.data)
    }).catch(err=>console.log(err))


    function addNotes(newNotes) {
        let data={
            title: newNotes.title,
             content: newNotes.content
        }
        Axios.post("https://fierce-spire-14700.herokuapp.com/",data);
    }

    function deleteItem(id) {
        let data={
            id:id
        }
        Axios.post("https://fierce-spire-14700.herokuapp.com/delete",data);
       

    }

  

    return (
        <div>
            <Header />
            <InputArea onAdd={addNotes} />
            {notes.map((noteitems, index) => {
                return <Notes onDelete={deleteItem} id={noteitems._id.valueOf()} key={index} heading={noteitems.title} content={noteitems.content} />
            })}
            
         
            {/* <Footer /> */}
        </div>

    );
}


export default App;