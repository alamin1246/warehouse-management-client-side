import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/banner/toy1.jpg'
import banner2 from '../../../images/banner/toy2.jpg'
import banner3 from '../../../images/banner/toy3.jpeg'

const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <div className='bg-dark'>
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3 className='text-dark fs-1'>Kids Toy Stock Management</h3>
                        <p className='text-info fs-1'>Welcome to Kids Toy Stock Management.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3 className='text-dark fs-1'>Kids Toy Stock Management</h3>
                        <p className='text-info fs-1'>Welcome to Kids Toy Stock Management.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3 className='text-dark fs-1'>Kids Toy Stock Management</h3>
                        <p className='text-info fs-1'>Welcome to Kids Toy Stock Management.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;