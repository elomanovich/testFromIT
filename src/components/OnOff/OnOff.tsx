import React from "react";

type OnOffType = {
    on: boolean
    onClick: () => void
}

export const OnOff = React.memo((props: OnOffType) => {


    const onStyle = {
        width: '30px',
        height: '20px',
        display: 'inline-block',
        border: '1px solid black',
        padding: '2px',
        background: props.on ? 'green' : 'white'
    }
    const offStyle = {
        width: '30px',
        height: '20px',
        display: 'inline-block',
        border: '1px solid black',
        padding: '2px',
        background: props.on ? 'white' : 'red',
        marginLeft: '5px'
    }
    const indicatorStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '5px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        background: props.on ? 'green' : 'red'
    }

    return (
        <div>
            <div onClick={props.onClick} style={onStyle}>On</div>
            <div onClick={props.onClick} style={offStyle}>Off</div>
            <div style={indicatorStyle}/>
        </div>
    )

})