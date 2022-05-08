import React from 'react';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <br />
            <div className='mt-5'>
                <h3 className='bg-primary text-white'><marquee behavior="" direction="">Welcome to Kids Toys Stock Management.</marquee></h3>
            </div>
            <div className='mt-5'>
                <Products></Products>
            </div>
        </>
    );
};

export default Home;