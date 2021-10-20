import React from 'react';
import { Col, Container, Row, Stack } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="bg-primary pt-5 pb-1 text-light">
            <Container>
                <Row>
                    <Col xs={{ order: 'first' }}>
                        <img className="logo-size" src="./logo.png" alt="" />
                        <p className="text-color">Free Online Literature with more than 2000 Classic Texts. Also includes Study Guides to the most read books and Help for Teachers.</p>
                    </Col>
                    <Col xs>
                        <h4 className="title-color">Footer Navbar</h4>
                        <Stack gap={3}>
                            <NavLink
                            className="text-light text-decoration-none"
                            to="/home"
                            >
                            - Home
                            </NavLink>
                            <NavLink
                            className="text-light text-decoration-none"
                            to="/doctors"
                            >
                            - Doctors
                            </NavLink>
                            <NavLink
                            className="text-light text-decoration-none"
                            to="/servicess"
                            >
                            - Services
                            </NavLink>
                            <NavLink
                            className="text-light text-decoration-none"
                            to="/about"
                            >
                            - About
                            </NavLink>
                            <NavLink
                            className="text-light text-decoration-none"
                            to="/contact"
                            >
                            - Contact
                            </NavLink>
                        </Stack>
                    </Col>
                    <Col xs={{ order: 'last' }}>
                        <h4 className="btn-color">News Letter</h4>
                    </Col>
                </Row>
                <p className="text-light text-center mt-5">Copyright 2021 by Palash</p>
            </Container>
        </div>
    );
};

export default Footer;