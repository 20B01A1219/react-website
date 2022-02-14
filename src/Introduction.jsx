import React from "react";
import "./styles.css";
function Introduction()
{
    return (
        <div className = "intro">
            <h1 className = "heading" align = "center">React</h1>
            <h2 className="subheading" align = "center">A JavaScript Library for building User interface</h2>
            <button>Get Started</button>
            <a href = "https://reactjs.org/tutorial/tutorial.html" className="tutoriallink"> Take the tutorial&gt;</a>
        </div>

    );
}
export default Introduction;