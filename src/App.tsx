import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {UncontrolledOnOff} from "./components/OnOff/UncontrolledOnOff";
import UncontrolledAccordion from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import {OnOff} from "./components/OnOff/OnOff";

function App() {
    type PageTitlePropsType = {
        title: string
    }

    function PageTitle(props:PageTitlePropsType) {
        return (
            <h1>{props.title}</h1>
        )
    }
    console.log('App rendering')

    const [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    const [switchOn, setColor] = useState(false)

    return (
        <div>
            <PageTitle title={'This is APP component'}/>
            <Rating value={ratingValue} onClick={setRatingValue}/>
            <Accordion title={'Menu'} collapsed={true}/>
            <UncontrolledOnOff/>
            <UncontrolledAccordion title={'Music'}/>
            <UncontrolledRating />
            <OnOff onClick={() => setColor(!switchOn)} on={switchOn}/>
        </div>
    );
}



export default App;
