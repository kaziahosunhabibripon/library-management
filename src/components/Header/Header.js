import React, { useContext } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import './Header.css';
const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand >Library &nbsp; <span> &nbsp;{loggedInUser.name}</span></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Link className="list-item" to='/home' >Home</Link>
                    <Link className="list-item" to="/order">Order</Link>
                    <Link className="list-item" to="/admin">Admin</Link>
                    <Link className="list-item" to="/deals">Deals</Link>
                    <Link className="list-item" to="/login">Login</Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;