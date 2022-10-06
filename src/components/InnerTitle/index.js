import React from "react";
import { onboardingSteps } from "../../constants/strings";
import "./styles.scss";

const InnerTitle = ({ title, subtitle, step }) => {
    return (
        <div className={"title_container " + (step === onboardingSteps ? "mt35" : "")}>
            <div className="title">{title}</div>
            <div className="subtitle">{subtitle}</div>
        </div>
    )
}

export default InnerTitle;