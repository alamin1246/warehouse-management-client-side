import React from 'react';
import { CustomHook } from '../../CustomHook/CustomHook';
import Banner from '../Banner/Banner';
import Product from '../Product/Product';
import Map from './Map/Map';
import './Home.css';

const Home = () => {
    const [products] = CustomHook([]);
    return (
        <>
            <Banner></Banner>
            <br />
            <div className='mt-5'>
                <h3 className='bg-primary text-white'><marquee behavior="" direction="">Welcome to Kids Toys Stock Management.</marquee></h3>
            </div>
            <div className='mt-5 row-design'>
                {
                    products.slice(0, 6).map(product => <Product key={product._id}
                        product={product} ></Product>)
                }
            </div>
            <div className='mt-5'>
                <Map></Map>
            </div>
        </>
    );
};


export default Home;