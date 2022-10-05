import React from "react";
import { BsPersonFill } from "react-icons/bs";
import GroupPerson from "../../icons/group-person";
import "./styles.scss";

const SelectionPlan = () => {
    return (
        <div className="selection_container">
            <div className="plan_container">
                <BsPersonFill className="plan_icon"/>
                <div className="plan_title">For myself</div>
                <div className="plan_text">Write better. Think more clearly. Stay organized.</div>
            </div>
            <div className="plan_container right">
                <GroupPerson className="plan_icon"/>
                <div className="plan_title">With my team</div>
                <div className="plan_text">Wikis, docs, tasks & projects, all in place. </div>
            </div>
        </div>
    )
}

export default SelectionPlan;