import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import { FaAccusoft, FaEnvelope, FaMobileAlt } from "react-icons/fa";
const Footer = () => {
    return (
        <div className="bg-primary container-fluid pt-5 mt-5">
            <div className="container ">
                <div className="row justify-content-around">
                    <div className="col-md-4">
                        <ul>
                            <li>Kids Toys Stoke Management</li>
                            <li><FaAccusoft /> East Hazi Nagor ,Sarulia, Demra,Dhaka 1361</li>
                            <li><FaEnvelope /> kidstoysstore@gmail.com</li>
                            <li><FaMobileAlt /> 01536183424</li>
                        </ul>
                    </div>
                    <div className="col-md-2">
                        <ul>
                            <li><Link to="/contact" className='footer-link'>Contact</Link></li>
                            <li><Link to="/about" className='footer-link'>About</Link></li>
                            <li><Link to="/privacy" className='footer-link'>Privacy</Link></li>
                            <li><Link to="/terms" className='footer-link'>Terms</Link></li>
                        </ul>
                    </div>
                    <div className="col-md-2">
                        <ul>
                            <li><Link to="/" className='footer-link'>Media</Link></li>
                            <li><Link to="/blog" className='footer-link'>Blogs</Link></li>
                            <li><Link to="/" className='footer-link'>Forums</Link></li>
                        </ul>
                    </div>
                </div>
                <h4 className='text-primary py-2 text-center'>All rights &copy; & reserves to <span className='text-white'>
                    Kids Toys Stoke Management {new Date().getFullYear()}</span></h4>
            </div>
        </div>
    );
};

export default Footer;