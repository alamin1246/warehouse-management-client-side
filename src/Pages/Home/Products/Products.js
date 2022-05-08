import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Products.css';

const Products = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <div id='services' className='container'>
            {/* <h2>Services: {services.length}</h2> */}
            <div className="row">
                <h1 className='text-success text-center mt-5'>Our Kids Toys Products</h1>
                <div className='products-container'>
                    {
                        services.map(service => <Product
                            key={service.id}
                            service={service}
                        >
                        </Product>)
                    }
                </div>
            </div>

        </div>
    );
};

export default Products;