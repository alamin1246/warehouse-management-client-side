import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <br />
            <div>
                <h3 className='bg-success text-white'><marquee behavior="" direction="">Welcome to Kids Toys Stock Management.</marquee></h3>
            </div>
            <Services></Services>
        </>
    );
};

export default Home;