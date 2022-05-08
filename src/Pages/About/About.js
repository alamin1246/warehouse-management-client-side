import React from 'react';
import kidToy from "../../images/KidsToy.jpeg"

const About = () => {
    return (
        <div className='about py-3'>
            <div className='container'>
                <div className="row">
                    <div className="col-lg-8">
                        <div><img className=' p-3 mb-5 bg-body rounded ' width={700} src={kidToy} alt="" /></div>
                    </div>
                    <div className="col-lg-4">
                        <div>
                            <h2>We are store best quality and best brand kids toy</h2>
                            <p className='py-3'>
                                Toy retail is a challenging industry. Younger buyers are more demanding than ever before, and they want emotions, fun, and joy when they go into a toy store. You need a business that customers enjoy visiting, a place where they can spend quality time, and a place with stunning interactive displays full of bright products if you want to sell toys profitably.
                                <br />

                                You must keep up with continually changing client appetites to compete in an increasingly online economy. Parents want gifts for their children to arrive quickly, with complete product availability and reasonable prices.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;