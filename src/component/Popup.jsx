import React from "react";

function popups(props) {

    return (
        <div className="popup" >
            <div className="popup-inner" >
                <h1  >Are You Sure?</h1>
                <button onClick={() => { props.unDelete() }} > No </button>
                <button onClick={() => { props.onDelete() }}  > Yes </button>
            </div>

        </div>
    )
}

export default popups;