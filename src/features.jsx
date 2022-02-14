import React from "react";

function Features(props)
{
    return(
        <div className="features" >
        <h3>{props.heading}</h3><br/>
        <p>{props.para1}</p>
        <p>{props.para2}</p>
        </div>
    )
}
export default Features;