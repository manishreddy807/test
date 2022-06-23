import React from 'react';

const OutputScreen = (props) => {
    console.log(props.value)
    return(
        <div>
            <input type="text"  value = {props.value} />
        </div>
    )
}

export default OutputScreen