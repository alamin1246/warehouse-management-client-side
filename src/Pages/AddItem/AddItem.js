import axios from 'axios';
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import './AddItem.css'

const AddItem = () => {
    const [product, setProduct] = useState([]);
    const navigate = useNavigate();
    const [user] = useAuthState(auth);
    console.log(user);
    const handleUpload = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const name = event.target.name.value;
        const img = event.target.img.value;
        const des = event.target.des.value;
        const quantity = event.target.quantity.value;
        const supplier = event.target.supplier.value;
        const price = event.target.price.value;
        const item = { email, name, img, des, quantity, supplier, price };
        const url = 'http://localhost:5000/uploadPd';
        fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                name, img, des, quantity, supplier, price
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((data) => setProduct(data));
        const urlItem = 'https://cryptic-cliffs-97574.herokuapp.com/products';
        axios.post(urlItem, item)
            .then(response => {
                console.log(response);
            })
        toast('Product Added successfully')
        navigate('/manage-inventory');
    }
    return (
        <div>
            <div className="container register">
                <div className="row">
                    <div className="col-md-3 register-left">
                        <h3>Welcome to Kids Toy Stock Management</h3>
                    </div>
                    <div className="col-md-9 register-right">
                        <div className="tab-content" id="myTabContent">
                            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                <h3 className="register-heading">Add New Item</h3>
                                <div className="row register-form">
                                    <Form onSubmit={handleUpload}>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>Email</Form.Label>
                                            <Form.Control type="email" name='email' value={user.email} placeholder="Enter product name" readOnly required />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>Product Name</Form.Label>
                                            <Form.Control type="text" name='name' placeholder="Enter product name" required />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formBasicPhoto">
                                            <Form.Label>Photo Url</Form.Label>
                                            <Form.Control type="text" name='img' placeholder="Enter product photo url" required />
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="formBasicPassword">
                                            <Form.Label>Descriptions</Form.Label>
                                            <Form.Control as="textarea" rows={3} type="text" name='des' placeholder="Descriptions" required />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formBasicQuantity">
                                            <Form.Label>Quantity</Form.Label>
                                            <Form.Control type="number" name='quantity' placeholder="Quantity" required />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formBasicSupplier">
                                            <Form.Label>Supplier</Form.Label>
                                            <Form.Control type="text" name='supplier' placeholder="Supplier" required />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formBasicPrice">
                                            <Form.Label>Price</Form.Label>
                                            <Form.Control type="text" name='price' placeholder="Price" required />
                                        </Form.Group>

                                        <Button variant="primary" type="submit">
                                            Add product
                                        </Button>
                                    </Form>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AddItem;