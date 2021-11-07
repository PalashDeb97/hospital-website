import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Header = () => {
    const {user, logOut} = useAuth();
    return (
        <div>

            <Navbar bg="primary" variant="dark" sticky="top" collapseOnSelect expand="lg" >
                <Container>
                    <Navbar.Brand>P Hospital</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end ">
                        <Nav.Link className="text-light"  as={NavLink} to="/home" activeStyle={{fontWeight: "bold"}}>Home</Nav.Link>
                        <Nav.Link className="text-light" as={NavLink} to="/servicess" activeStyle={{fontWeight: "bold"}}>Services</Nav.Link>
                        <Nav.Link className="text-light" as={NavLink} to="/doctors" activeStyle={{fontWeight: "bold"}}>Doctors</Nav.Link>
                        <Nav.Link className="text-light" as={NavLink} to="/about" activeStyle={{fontWeight: "bold"}}>About</Nav.Link>
                        <Nav.Link className="text-light" as={NavLink} to="/contact" activeStyle={{fontWeight: "bold"}}>Contact</Nav.Link>

                        
                        
                        <Navbar.Text>
                            <a href="#login" className="me-3">{user?.displayName}</a>
                        </Navbar.Text>
                        
                        {user?.email ?
                            <Button onClick={logOut} variant="dark" className="text-light">Logout</Button>
                             :
                            <Nav.Link className="text-light btn btn-dark" as={NavLink} to="/login">Login</Nav.Link>
                        }
                        
                    </Navbar.Collapse>
                </Container>
            </Navbar>


        </div>
    );
};

export default Header;