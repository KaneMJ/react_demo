import React from 'react';

export default props => {

    function handleClick(){
        console.log("Does this work");
        props.updateColor();
    }


    return (
        <div>
            <button className="btn btn-outline-success" onClick={handleClick}>Definitely Click Me. Be sure of yourself. Green means go. Is this button too long?? Nevermind, I don't know why I asked.</button>
        </div>
    )
}       