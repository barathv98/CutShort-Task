import React from "react";
import "./styles.scss";

const CreateButton = ({ buttonText, clickFunc }) => {
    return (
        <button className="btn_style" onClick={clickFunc}>{buttonText}</button>
    )
}

export default CreateButton;