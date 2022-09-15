import React from "react";
import Condition from "../../components/condition/Condition";
import './conditions.css'

const Conditions = () => { 
    return (
        <div className="conditions">
            <h2>Common Conditions</h2>
            <div className="conditions__types">
                <Condition />
            </div>
        </div>
    )
}

export default Conditions

// reusing different components by passing different props. 