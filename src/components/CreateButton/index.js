import React from "react";
import "./styles.scss";

const CreateButton = ({ buttonText }) => {
    return (
        <button className="btn_style">{buttonText}</button>
    )
}

export default CreateButton;