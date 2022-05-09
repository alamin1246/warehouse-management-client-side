import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Product.css';

const Product = ({ product }) => {
    const { id, name, img, description, price, quantity, supplier_name } = product;
    const navigate = useNavigate();
    const navigateToProductDetail = id => {
        navigate(`/product/${id}`)
    }
    return (
        <div className='product'>
            <img className='w-100' src={img} alt="" />
            <h2>Name: {name}</h2>
            <p>Price: Tk.{price}</p>
            <p><small>Description: {description}</small></p>
            <p><small>Quantity: {quantity}</small></p>
            <p>Supplier Name: {supplier_name}</p>
            <button onClick={() => navigateToProductDetail(product._id)} className='btn btn-success text-black'> Manage</button>
        </div>
    );
};

export default Product;