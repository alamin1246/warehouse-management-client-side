import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Products.css';

const Products = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/product')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])
    return (
        <div id='products' className='container'>
            <div className="row">
                <h1 className='text-success text-center mt-5'>Our Kids Toys Products</h1>
                <div className='products-container'>
                    {
                        products.map(product => <Product
                            key={product.id}
                            product={product}
                        >
                        </Product>)
                    }
                </div>
            </div>

        </div>
    );
};

export default Products;