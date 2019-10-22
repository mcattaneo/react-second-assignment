import React from 'react';

const char = (props) => {

    const inputCharStyle = {
        display: 'inline-block', 
        padding: '16px', 
        textAlign: 'center', 
        margin: '16px', 
        border: '1px solid black'
    }

    return (
        <div style={inputCharStyle} onClick={props.click}>
            {props.inputChar}
        </div>
    );
};

export default char;