import React from "react";
import "./styles.scss";

const ProgressBar = () => {
    return (
        <div className="progress_bar">
            {(() => {
                const arr = [];
                for (let i = 1; i <= 4; i++) {
                    if (i === 4) {
                        arr.push(
                            <ProgressNumber innerText={i} end={true} />
                        );
                    }
                    else {
                        arr.push(
                            <ProgressNumber innerText={i} end={false} />
                        );
                    }
                }
                return arr;
            })()}
        </div>
    )
}

export default ProgressBar;

export const ProgressNumber = ({ innerText, end }) => {
    return (
        <>
            <div className="number_box">
                <span className="box_inner_text">{innerText}</span>
            </div>
            {!end && <div className="number_line"></div>}
        </>
    )
}