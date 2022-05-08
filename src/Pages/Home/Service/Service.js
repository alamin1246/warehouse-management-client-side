import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    const { id, name, img, description, price } = service;
    const navigate = useNavigate();
    const navigateToServiceDetail = id => {
        navigate(`/service/${id}`)
    }
    return (
        <div className='service'>
            <img className='w-100' src={img} alt="" />
            <h2>Name: {name}</h2>
            <p>Price: Tk.{price}</p>
            <p><small>Food Description: {description}</small></p>
            <button onClick={() => navigateToServiceDetail(id)} className='btn btn-success text-black'> Book: {name}</button>
        </div>
    );
};

export default Service;