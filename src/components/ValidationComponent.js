import React from 'react';


const validation = (props) => {
    let outputMessage = props.currentTextLength > 5 ? 'Text long enough' : 'Text too short';

    return (
        <div>
            <label>{outputMessage}</label>
        </div>
    );
};

export default validation;