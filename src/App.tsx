import React, {useState} from 'react';
import './App.css';
import {AccordionMemo} from "./components/Accordion/Accordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {UncontrolledOnOff} from "./components/OnOff/UncontrolledOnOff";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import {OnOff} from "./components/OnOff/OnOff";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {Clock} from "./components/Clock/Clock";

function App() {
    type PageTitlePropsType = {
        title: string
    }

    const PageTitle = React.memo(function PageTitle(props: PageTitlePropsType) {
        return (
            <h1>{props.title}</h1>
        )
    })

    console.log('App rendering')

    const [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    const [switchOn, setColor] = useState(false)
    const [collapsed, setToggle] = useState(true)

    return (
        <div className='clock'>
            <PageTitle title={'This is APP component'}/>
            <Rating value={ratingValue} onClick={setRatingValue}/>
            <AccordionMemo titleValue={'Menu'} collapsed={true} onChange={() => setToggle(!collapsed)}/>
            <UncontrolledOnOff/>
            <UncontrolledAccordion title={'Music'}/>
            <UncontrolledRating/>
            <OnOff onClick={() => setColor(!switchOn)} on={switchOn}/>
            <Clock/>
        </div>
    );
}


export default App;
