import React from "react";
import "./styles.scss";
import InnerTitle from "../InnerTitle/index";
import CreateButton from "../CreateButton/index";
import { secondPageTitle, secondPageSubTitle, createButtonText } from "../../constants/strings";

const SecondPage = () => {
    return (
        <div>
            <InnerTitle title={secondPageTitle} subtitle={secondPageSubTitle} />
            <label className="input_label">Workspace Name</label>
            <input type="text" className="input_text" placeholder="Eden"></input>
            <label className="input_label">Workspace URL</label>
            <span className="">(optional)</span>
            <div className="input_split">
                <div className="">www.eden.com/</div>
                <input type="text" className="input_text" placeholder="Example"></input>
            </div>
            
            <CreateButton buttonText={createButtonText} />
        </div>
    )
}

export default SecondPage;