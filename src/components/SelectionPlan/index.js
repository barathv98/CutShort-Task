import React, { useState } from "react";
import SinglePerson from "../../icons/single-person";
import GroupPerson from "../../icons/group-person";
import "./styles.scss";

const SelectionPlan = () => {
    const [selectedPlan, setSelectedPlan] = useState("single");
    return (
        <div className="selection_container">
            <div className={"plan_container " + (selectedPlan === "single" ? "active" : "")}
                onClick={() => setSelectedPlan("single")}>
                <SinglePerson className="plan_icon"/>
                <div className="plan_title">For myself</div>
                <div className="plan_text">Write better. Think more clearly. Stay organized.</div>
            </div>
            <div className={"plan_container right " + (selectedPlan === "team" ? "active" : "")}
                onClick={() => setSelectedPlan("team")}>
                <GroupPerson className="plan_icon"/>
                <div className="plan_title">With my team</div>
                <div className="plan_text">Wikis, docs, tasks & projects, all in place. </div>
            </div>
        </div>
    )
}

export default SelectionPlan;