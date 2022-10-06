import React from "react";
import "./styles.scss";
import InnerTitle from "../InnerTitle/index";
import CreateButton from "../CreateButton/index";
import { thirdPageTitle, thirdPageSubTitle, createButtonText } from "../../constants/strings";
import SelectionPlan from "../SelectionPlan/index";
import ProgressBar from "../ProgressBar/index";
import { useNavigate, useParams } from "react-router-dom";

const ThirdPage = () => {
    const navigate = useNavigate();
    const { displayName } = useParams();
    const checkThirdValues = () => {
        navigate("/3/"+displayName);
    }
    return (
        <div>
            <ProgressBar step={3} />
            <InnerTitle title={thirdPageTitle} subtitle={thirdPageSubTitle} />
            <SelectionPlan />
            <CreateButton buttonText={createButtonText} clickFunc={checkThirdValues}/>
        </div>
    )
}

export default ThirdPage;