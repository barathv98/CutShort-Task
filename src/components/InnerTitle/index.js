import React from "react";
import "./styles.scss";

const InnerTitle = ({ title, subtitle }) => {
    return (
        <div className="title_container">
            <div className="title">{title}</div>
            <div className="subtitle">{subtitle}</div>
        </div>
    )
}

export default InnerTitle;