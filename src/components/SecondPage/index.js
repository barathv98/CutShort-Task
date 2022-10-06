import React, { useState } from "react";
import "./styles.scss";
import InnerTitle from "../InnerTitle/index";
import CreateButton from "../CreateButton/index";
import { secondPageTitle, secondPageSubTitle, createButtonText } from "../../constants/strings";
import ProgressBar from "../ProgressBar/index";
import { useNavigate, useParams } from "react-router-dom";

const SecondPage = () => {
    const [workspaceName, setWorkspaceName] = useState("");
    const navigate = useNavigate();
    const { displayName } = useParams();
    const checkSecondValues = () => {
        if (workspaceName.length > 0) {
            navigate("/2/"+displayName);
        }
    }
    return (
        <div>
            <ProgressBar step={2} />
            <InnerTitle title={secondPageTitle} subtitle={secondPageSubTitle} />
            <div className="input_label">Workspace Name</div>
            <input type="text" className="input_text" placeholder="Eden"
                onChange={e => setWorkspaceName(e.target.value)}></input>
            <div className="split_label">
                <span className="input_label">Workspace URL</span>
                <span className="option-text">(optional)</span>
            </div>
            <div className="input_split">
                <div className="split_default">www.eden.com/</div>
                <input type="text" className="input_text split" placeholder="Example"></input>
            </div>
            <CreateButton buttonText={createButtonText} clickFunc={checkSecondValues} />
        </div>
    )
}

export default SecondPage;