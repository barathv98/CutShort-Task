import React from "react";
import CreateButton from "../CreateButton/index";
import InnerTitle from "../InnerTitle/index";
import { successPageTitle, successPageSubTitle, successBtnText } from "../../constants/strings";
import "./styles.scss";
import { BsCheck } from "react-icons/bs";

const ThirdPage = () => {
    return (
        <div>
            <div className="success_icon"><BsCheck /></div>
            <InnerTitle title={successPageTitle} subtitle={successPageSubTitle} />
            <CreateButton buttonText={successBtnText} />
        </div>
    )
}

export default ThirdPage;