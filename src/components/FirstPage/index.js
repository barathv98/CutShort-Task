import React from "react";
import InnerTitle from "../InnerTitle/index";
import CreateButton from "../CreateButton/index";
import { firstPageTitle, firstPageSubTitle, createButtonText } from "../../constants/strings";
import "./styles.scss";
import ProgressBar from "../ProgressBar/index";

const FirstPage = () => {
    return (
        <div>
            <ProgressBar />
            <InnerTitle title={firstPageTitle} subtitle={firstPageSubTitle} />
            <div className="input_label mt12">Full Name</div>
            <input type="text" className="input_text" placeholder="Steve Jobs"></input>
            <div className="input_label mt12">Display Name</div>
            <input type="text" className="input_text" placeholder="Steve"></input>
            <CreateButton buttonText={createButtonText} />
        </div>
    )
}

export default FirstPage;