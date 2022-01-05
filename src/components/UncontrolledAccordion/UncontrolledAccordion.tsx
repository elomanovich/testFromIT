import React, {useReducer} from "react";
import {reducer} from "./reducer";

type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccordionTitle rendering')
    return <h3 onClick={() => {
        props.onClick()
    }}>{props.title}</h3>
}


function AccordionBody() {
    console.log('AccordionBody rendering')
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
}

type AccordionPropsType = {
    title: string,
}



export const UncontrolledAccordion = React.memo( function UncontrolledAccordion(props: AccordionPropsType) {

    //const [collapsed, setToggle] = useState(true)
    const [collapsed, dispatch] = useReducer(reducer, false)
    const toggle = () => dispatch({type: 'TOGGLE-COLLAPSED'})

    console.log('Accordion rendering')
    return <div>
        <AccordionTitle title={props.title} onClick={toggle}/>
        {!collapsed && <AccordionBody/>}
    </div>
})
