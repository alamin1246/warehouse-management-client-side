import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';


const Header = () => {
    const [user] = useAuthState(auth);


    return (
        <>
            <Navbar collapseOnSelect expand="lg" sticky='top' bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <h2>Kids <span className='text-info'>Toy Stock</span> Management </h2>

                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">

                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <Nav.Link as={Link} to="about">About</Nav.Link>
                            <Nav.Link as={Link} to="blogs">Blogs</Nav.Link>
                            <Nav.Link as={Link} to="manage-inventory">Manage Inventories</Nav.Link>
                            <Nav.Link as={Link} to="add-item">Add Item</Nav.Link>
                            <Nav.Link as={Link} to="my-items">My Items</Nav.Link>
                           <div>
                           <span className="navbar-text">
                                {
                                    user ? <span>{user.displayName}<button className='btn btn-link text-info' onClick={() => signOut(auth)}>Sign Out</button></span> : <Nav.Link as={Link} to="login">
                                        Login
                                    </Nav.Link>
                                }
                            </span>
                           </div>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;