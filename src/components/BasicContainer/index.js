import React from "react";
import "./styles.scss";

const BasicContainer = ({ children }) => {
    return (
        <div className="container">
            {children}
        </div>
    )
}

export default BasicContainer;