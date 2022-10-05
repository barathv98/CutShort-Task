import React from "react";
import CreateButton from "../CreateButton/index";
import InnerTitle from "../InnerTitle/index";
import { successPageTitle, successPageSubTitle, successBtnText } from "../../constants/strings";
import "./styles.scss";
import { BsCheck } from "react-icons/bs";
import ProgressBar from "../ProgressBar/index";

const ThirdPage = () => {
    const successString = successPageTitle.replace("${displayName}", "Eden");
    return (
        <div>
            <ProgressBar />
            <div className="success_icon"><BsCheck className="check_white_icon" /></div>
            <InnerTitle title={successString} subtitle={successPageSubTitle} />
            <CreateButton buttonText={successBtnText} />
        </div>
    )
}

export default ThirdPage;