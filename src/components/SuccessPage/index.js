import React from "react";
import CreateButton from "../CreateButton/index";
import InnerTitle from "../InnerTitle/index";
import { successPageTitle, successPageSubTitle, successBtnText } from "../../constants/strings";
import "./styles.scss";
import { BsCheck } from "react-icons/bs";
import ProgressBar from "../ProgressBar/index";
import { useParams } from "react-router-dom";

const ThirdPage = () => {
    const { displayName } = useParams();
    const successString = successPageTitle.replace("${displayName}", displayName);
    return (
        <div>
            <ProgressBar step={4} />
            <div className="success_icon"><BsCheck className="check_white_icon" /></div>
            <InnerTitle title={successString} subtitle={successPageSubTitle} step={4} />
            <CreateButton buttonText={successBtnText} />
        </div>
    )
}

export default ThirdPage;