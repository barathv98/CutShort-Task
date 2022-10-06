import React from "react";
import "./styles.scss";
import { onboardingSteps } from "../../constants/strings";

const ProgressBar = ({ step: currentStep }) => {
    return (
        <div className="progress_bar">
            {(() => {
                const arr = [];
                for (let i = 1; i <= onboardingSteps; i++) {
                    if (i < currentStep) {
                        arr.push(
                            <ProgressNumber innerText={i} active="past" />
                        );
                    }
                    else if (i === currentStep) {
                        arr.push(
                            <ProgressNumber innerText={i} active="current" />
                        );
                    }
                    else {
                        arr.push(
                            <ProgressNumber innerText={i} active="future" />
                        );
                    }
                }
                return arr;
            })()}
        </div>
    )
}

export default ProgressBar;

export const ProgressNumber = ({ innerText, active }) => {
    return (
        <>
            <div className={"number_box " + active}>
                <span className="box_inner_text">{innerText}</span>
            </div>
            {innerText !== onboardingSteps && <div className={"number_line " + active}></div>}
        </>
    )
}