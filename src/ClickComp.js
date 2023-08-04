import React from "react";
import HigherOrder from './HigherOrder';

const ClickComp = ({count, increment}) => {
    return(
        <>
        <h3>{count}</h3>
        <button onClick={increment}>Click </button>
        </>
        
    )
}

export  default HigherOrder(ClickComp);
