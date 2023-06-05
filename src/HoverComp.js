import React from "react";
import HigherOrder from './HigherOrder';

const HoverComp = ({count, increment}) => {
    return(
        <>
        <h3>{count}</h3>
        <button onMouseOver={increment}>Hover</button>
        </>
    )
}

export  default HigherOrder(HoverComp);