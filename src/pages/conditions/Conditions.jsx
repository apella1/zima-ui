import React from "react";
import Condition from "../../components/condition/Condition";
import './conditions.css'

const Conditions = () => { 
    return (
        <div className="conditions" name='conditions'>
            <h3>Common Conditions</h3>
            <div className="condition__types">
                <Condition 
                    title='DEPRESSION'
                    text=''
                />
                <Condition
                    title='ANXIETY' 
                    text=''
                />
                <Condition
                    title='STRESS'
                    text='' 
                />
                <Condition 
                    title='ALCOHOLISM'
                    text=''
                />
                <Condition 
                    title='BIPOLAR DISORDER'
                    text=''
                />
                <Condition 
                    title='SCIZOPHRENIA'
                    text=''
                />
            </div>
        </div>
    )
}

export default Conditions

// reusing different components by passing different props. 
