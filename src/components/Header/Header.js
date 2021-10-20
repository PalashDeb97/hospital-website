import React from 'react';
import { Container, Nav, Navbar, Stack } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useFirebase from '../../Hooks/useFirebase';

const Header = () => {
    const {user, logOut} = useFirebase();

    return (
        <div>
        <Navbar bg="primary" variant="dark">
            <Container>
                <Navbar.Brand href="#home">P Hospital</Navbar.Brand>
                <Nav className="ms-auto">
                <Stack direction="horizontal" gap={3}>
                    <NavLink
                    className="text-light text-decoration-none"
                    to="/home"
                    activeStyle={{
                        fontWeight: "bold"
                    }}
                    >
                    Home
                    </NavLink>
                    <NavLink
                    className="text-light text-decoration-none"
                    to="/servicess"
                    activeStyle={{
                        fontWeight: "bold"
                    }}
                    >
                    Services
                    </NavLink>
                    <NavLink
                    className="text-light text-decoration-none"
                    to="/doctors"
                    activeStyle={{
                        fontWeight: "bold"
                    }}
                    >
                    Doctors
                    </NavLink>
                    <NavLink
                    className="text-light text-decoration-none"
                    to="/about"
                    activeStyle={{
                        fontWeight: "bold"
                    }}
                    >
                    About
                    </NavLink>
                    <NavLink
                    className="text-light text-decoration-none"
                    to="/contact"
                    activeStyle={{
                        fontWeight: "bold"
                    }}
                    >
                    Contact
                    </NavLink>
                    
                    {user?.email && <span className="text-light">{user?.displayName}</span>}

                    {
                        user?.email ?
                            <NavLink
                            className="btn btn-dark"
                            to="/login"
                            onClick={logOut}
                            >
                            Logout
                            </NavLink>
                        :
                            <NavLink
                            className="btn btn-dark"
                            to="/login"
                            >
                            Login
                            </NavLink>
                    }

                    

                </Stack>
                </Nav>
            </Container>
        </Navbar>
        </div>
    );
};

export default Header;