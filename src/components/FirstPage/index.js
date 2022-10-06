import React, { useState } from "react";
import InnerTitle from "../InnerTitle/index";
import CreateButton from "../CreateButton/index";
import { firstPageTitle, firstPageSubTitle, createButtonText } from "../../constants/strings";
import "./styles.scss";
import ProgressBar from "../ProgressBar/index";
import { useNavigate } from "react-router-dom";

const FirstPage = () => {
    const [fullName, setFullName] = useState("");
    const [displayName, setDisplayName] = useState("");
    const navigate = useNavigate();
    const checkFirstValues = () => {
        if (fullName.length > 0 && displayName.length > 0) {
            navigate("/1/"+displayName);
        }
    }
    return (
        <div>
            <ProgressBar step={1} />
            <InnerTitle title={firstPageTitle} subtitle={firstPageSubTitle} />
            <div className="input_label mt12">Full Name</div>
            <input type="text" className="input_text" placeholder="Steve Jobs" 
                onChange={e => setFullName(e.target.value)}></input>
            <div className="input_label mt12">Display Name</div>
            <input type="text" className="input_text" placeholder="Steve" 
                onChange={e => setDisplayName(e.target.value)}></input>
            <CreateButton buttonText={createButtonText} clickFunc={checkFirstValues} />
        </div>
    )
}

export default FirstPage;