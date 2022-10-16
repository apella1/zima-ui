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
                    text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab aliquid quod nobis facere amet excepturi corrupti omnis ex ut quos nisi ullam voluptates repudiandae tempora, tempore eveniet quaerat commodi harum tenetur eum, quasi expedita blanditiis. Hic inventore laboriosam laborum quas sapiente nostrum consequuntur id cumque libero reprehenderit optio, suscipit temporibus?'
                />
                <Condition
                    title='ANXIETY' 
                    text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab aliquid quod nobis facere amet excepturi corrupti omnis ex ut quos nisi ullam voluptates repudiandae tempora, tempore eveniet quaerat commodi harum tenetur eum, quasi expedita blanditiis. Hic inventore laboriosam laborum quas sapiente nostrum consequuntur id cumque libero reprehenderit optio, suscipit temporibus?'
                />
                <Condition
                    title='STRESS'
                    text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab aliquid quod nobis facere amet excepturi corrupti omnis ex ut quos nisi ullam voluptates repudiandae tempora, tempore eveniet quaerat commodi harum tenetur eum, quasi expedita blanditiis. Hic inventore laboriosam laborum quas sapiente nostrum consequuntur id cumque libero reprehenderit optio, suscipit temporibus?' 
                />
                <Condition 
                    title='ALCOHOLISM'
                    text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab aliquid quod nobis facere amet excepturi corrupti omnis ex ut quos nisi ullam voluptates repudiandae tempora, tempore eveniet quaerat commodi harum tenetur eum, quasi expedita blanditiis. Hic inventore laboriosam laborum quas sapiente nostrum consequuntur id cumque libero reprehenderit optio, suscipit temporibus?'
                />
                <Condition 
                    title='BIPOLAR DISORDER'
                    text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab aliquid quod nobis facere amet excepturi corrupti omnis ex ut quos nisi ullam voluptates repudiandae tempora, tempore eveniet quaerat commodi harum tenetur eum, quasi expedita blanditiis. Hic inventore laboriosam laborum quas sapiente nostrum consequuntur id cumque libero reprehenderit optio, suscipit temporibus?'
                />
                <Condition 
                    title='SCIZOPHRENIA'
                    text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab aliquid quod nobis facere amet excepturi corrupti omnis ex ut quos nisi ullam voluptates repudiandae tempora, tempore eveniet quaerat commodi harum tenetur eum, quasi expedita blanditiis. Hic inventore laboriosam laborum quas sapiente nostrum consequuntur id cumque libero reprehenderit optio, suscipit temporibus?'
                />
            </div>
        </div>
    )
}

export default Conditions

// reusing different components by passing different props. 