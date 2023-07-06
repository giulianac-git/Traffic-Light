import React, { useState } from "react";

//Lights 
const Light = () => {

    const [selected, setSelected] = useState("red");
    return (
        <>
            <div className={"red light" + (selected === "red" ? " selected" : "")}
                onClick={() => setSelected("red")}></div>
            <div className={"yellow light" + (selected === "yellow" ? " selected" : "")}
                onClick={() => setSelected("yellow")}></div>
            <div className={"green light" + (selected === "green" ? " selected" : "")}
                onClick={() => setSelected("green")}></div>
        </>
    );
};

export default Light;