import React from "react";
import './testimonials.css'

const Testimonials = () => { 
    return (
        <div className="zima__testimonials">
            <div className="zima__testimonials--users">
                <div className="zima__testimonials--user">
                    <div className="zima__testimonia--user-information">
                        <img src="" alt="user" />
                        <h2 className="user-name">Tania Helga</h2>
                    </div>

                    <div className="zima__testimonia--user-text">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam quas incidunt quaerat adipisci, expedita aperiam et. Excepturi maxime fugiat commodi!</p>
                    </div>
                </div>

                <div className="zima__testimonials--user">
                    <div className="zima__testimonia--user-information">
                        <img src="" alt="user" />
                        <h2 className="user-name">Christopher Walking</h2>
                    </div>

                    <div className="zima__testimonia--user-text">
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis corporis sunt, quia mollitia eos itaque nostrum delectus iusto. Debitis, quos!</p>
                    </div>
                </div>

                <div className="zima__testimonials--user">
                    <div className="zima__testimonia--user-information">
                        <img src="" alt="user" />
                        <h2 className="user-name">Nelson Mandela</h2>
                    </div>

                    <div className="zima__testimonia--user-text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus temporibus totam dolorum unde asperiores doloremque hic perferendis nihil nesciunt provident!
                    </div>
                </div>

        
            </div>

            <div className="zima__testimonial--emergency">
                <p>Dial <b>911</b> in life-threatening situations.</p>
            </div>
        </div>
    )
}

export default Testimonials
