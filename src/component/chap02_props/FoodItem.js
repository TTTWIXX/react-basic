import React from 'react'

const FoodItem = (props) => {

    // console.log('props: ', props);
    return ( 
        <li id={props.foodId}> {props.foodName}({props.price}원) </li>
    )
}

export default FoodItem