import React from "react";
import "./styles.scss";
import InnerTitle from "../InnerTitle/index";
import CreateButton from "../CreateButton/index";
import { secondPageTitle, secondPageSubTitle, createButtonText } from "../../constants/strings";
import ProgressBar from "../ProgressBar/index";

const SecondPage = () => {
    return (
        <div>
            <ProgressBar />
            <InnerTitle title={secondPageTitle} subtitle={secondPageSubTitle} />
            <div className="input_label">Workspace Name</div>
            <input type="text" className="input_text" placeholder="Eden"></input>
            <div className="split_label">
                <span className="input_label">Workspace URL</span>
                <span className="">(optional)</span>
            </div>
            <div className="input_split">
                <div className="split_default">www.eden.com/</div>
                <input type="text" className="input_text" placeholder="Example"></input>
            </div>
            
            <CreateButton buttonText={createButtonText} />
        </div>
    )
}

export default SecondPage;