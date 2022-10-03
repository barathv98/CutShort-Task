import React from "react";
import InnerTitle from "../InnerTitle/index";
import CreateButton from "../CreateButton/index";
import { firstPageTitle, firstPageSubTitle, createButtonText } from "../../constants/strings";
import "./styles.scss";

const FirstPage = () => {
    return (
        <div>
            <InnerTitle title={firstPageTitle} subtitle={firstPageSubTitle} />
            <label className="input_label">Full Name</label>
            <input type="text" className="input_text" placeholder="Steve Jobs"></input>
            <label className="input_label mt12">Display Name</label>
            <input type="text" className="input_text" placeholder="Steve"></input>
            <CreateButton buttonText={createButtonText} />
        </div>
    )
}

export default FirstPage;