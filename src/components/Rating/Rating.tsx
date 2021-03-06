import React from "react";

type StarPropsType = {
    selected: boolean
    onClick: (title: RatingValueType) => void
    value: RatingValueType
}

function Star(props: StarPropsType) {
    console.log('Star rendering')
    return (
        <span onClick={() => props.onClick(props.value)}>
    {props.selected ? <b>Star </b> : "Star "}
        </span>
    )
}

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5

type RatingPropsType = {
    value: RatingValueType;
    onClick: (title: RatingValueType) => void
}

export const Rating = React.memo(function Rating(props: RatingPropsType) {
    console.log('Rating rendering')

    return (
        <div>
            <Star selected={props.value > 0} onClick={props.onClick} value={1}/>
            <Star selected={props.value > 1} onClick={props.onClick} value={2}/>
            <Star selected={props.value > 2} onClick={props.onClick} value={3}/>
            <Star selected={props.value > 3} onClick={props.onClick} value={4}/>
            <Star selected={props.value > 4} onClick={props.onClick} value={5}/>
        </div>)
})