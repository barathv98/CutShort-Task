import React from "react";
import "./styles.scss";
import InnerTitle from "../InnerTitle/index";
import CreateButton from "../CreateButton/index";
import { thirdPageTitle, thirdPageSubTitle, createButtonText } from "../../constants/strings";

const ThirdPage = () => {
    return (
        <div>
            <InnerTitle title={thirdPageTitle} subtitle={thirdPageSubTitle} />
            <CreateButton buttonText={createButtonText} />
        </div>
    )
}

export default ThirdPage;