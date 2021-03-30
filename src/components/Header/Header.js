import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';
const Header = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand >Library</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Link className="list-item" to='/home' >Home</Link>
                    <Link className="list-item" to="/orders">Orders</Link>
                    <Link className="list-item" to="/admin">Admin</Link>
                    <Link className="list-item" to="/deals">Deals</Link>
                    <Link className="list-item" to="/login">Login</Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;