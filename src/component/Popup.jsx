import React, { useState } from "react";

function popups(props){

    function Delete(){
        props.onDelete()
    }
    function unDelete(){
        props.unDelete()
    }
    return(
        <div className="popup" >
        <div  className="popup-inner" >
        <h1  >Are You Sure?</h1>
        <button onClick={unDelete} > No </button>
        <button onClick={Delete}  > Yes </button>
        </div>
        
        </div>
    )
}

export default popups;