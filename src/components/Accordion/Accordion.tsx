import React from "react";


type ItemType = {
    title: string
    value: any
}

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onChange: () => void
}

export const AccordionMemo = React.memo(function Accordion(props: AccordionPropsType) {
    console.log('Accordion rendering')
    return <div>
        <AccordionTitle titleValue={props.titleValue}
                        onChange={props.onChange}

        />
        {/*{!props.collapsed && <AccordionBody items={}/>}*/}
    </div>
})

type AccordionTitlePropsType = {
    titleValue: string
    onChange: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccordionTitle rendering')
    return <h3 onClick={() => props.onChange()}>{props.titleValue}</h3>
}


type AccordionBodyPropsType = {
    items: ItemType[]
    onClick: (value: any) => void
}

function AccordionBody(props: AccordionBodyPropsType) {
    console.log('AccordionBody rendering')
    return <ul>
        {props.items.map((i, index) => <li onClick={() => {
            props.onClick(i.value)
        }} key={index}>{i.title}</li>)}
    </ul>
}

