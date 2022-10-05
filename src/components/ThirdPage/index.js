import React from "react";
import "./styles.scss";
import InnerTitle from "../InnerTitle/index";
import CreateButton from "../CreateButton/index";
import { thirdPageTitle, thirdPageSubTitle, createButtonText } from "../../constants/strings";
import SelectionPlan from "../SelectionPlan/index";
import ProgressBar from "../ProgressBar/index";

const ThirdPage = () => {
    return (
        <div>
            <ProgressBar />
            <InnerTitle title={thirdPageTitle} subtitle={thirdPageSubTitle} />
            <SelectionPlan />
            <CreateButton buttonText={createButtonText} />
        </div>
    )
}

export default ThirdPage;