import React from 'react';

export default function(props){

    console.log('Box Props:', props);

    const boxStyle = {
        display: 'inline-block',
        height: '150px',
        width: '150px',
        backgroundColor: props.color,
        margin: '15px',
        overflow: 'hidden'
    }


    return <div style={boxStyle}/>
}