import React from "react";
import './Map.css';

const Map = () => {
    return (
        <>
            <h1 className="text-center text-gray-600 text-2xl md:text-5xl font-semibold py-10 md:pt-20 ">
                Our Kids Toys Store Location and Support Address
            </h1>
            <div className="container md:pt-14 pb-20 md:pb-28 px-6 mx-auto">
                <section className=" text-gray-800">
                    <div className="block rounded-lg shadow-lg bg-white">
                        <div className="flex flex-wrap items-center">
                            <div className="grow-0 shrink-0 basis-auto block w-full lg:flex lg:w-6/12 xl:w-4/12">
                                <div className="map-container-2 h-[500px] w-full">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.82453213862!2d90.48807621498074!3d23.717959334605393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b654ffc11551%3A0x6c26432aaaf9f540!2sHaji%20Nagar%2C%20Dhaka%201361!5e0!3m2!1sen!2sbd!4v1652078751719!5m2!1sen!2sbd"
                                        className="left-0 top-0 h-full w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg"
                                        title="map"
                                        frameBorder="0"
                                        width="100%"
                                        height="600"
                                        allowfullscreen=""
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                    >
                                    </iframe>
                                </div>
                            </div>
                            <div className="support">
                                <div className="grow ml-6">
                                    <h4>Technical support</h4>
                                    <p className="text-gray-500">support@kidstoys.com</p>
                                    <p className="text-gray-500">+880 1536183424</p>
                                </div>


                                <div className="grow ml-6">
                                    <h4>Stock questions</h4>
                                    <p className="text-gray-500">stock@kidtoys.com</p>
                                    <p className="text-gray-500">+880 1536183424</p>
                                </div>
                                <div className="grow ml-6">
                                    <h4>Daily Policy</h4>
                                    <p className="text-gray-500">policy@kidstoys.com</p>
                                    <p className="text-gray-500">+880 1536183424</p>
                                </div>

                                <div className="grow ml-6">
                                    <h4>Bug report</h4>
                                    <p className="text-gray-500">bugs@kidtoys.com</p>
                                    <p className="text-gray-500">+880 1536183424</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Map;
