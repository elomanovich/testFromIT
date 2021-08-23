import React, {useState} from "react";

// type OnOffType = {
//     onChange: (value: boolean) => void
// }

export const UncontrolledOnOff = () => {
    const [on, setColor] = useState(false)


    const onStyle = {
        width: '30px',
        height: '20px',
        display: 'inline-block',
        border: '1px solid black',
        padding: '2px',
        background: on ? 'green' : 'white'
    }
    const offStyle = {
        width: '30px',
        height: '20px',
        display: 'inline-block',
        border: '1px solid black',
        padding: '2px',
        background: on ? 'white' : 'red',
        marginLeft: '5px'
    }
    const indicatorStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '5px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        background: on ? 'green' : 'red'
    }

    return (
        <div>
            <div onClick={() => {setColor(true)}} style={onStyle}>On</div>
            <div onClick={() => {setColor(false)}} style={offStyle}>Off</div>
            <div style={indicatorStyle}/></div>
    )

}