import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useFirebase from '../../Hooks/useFirebase';

const Register = () => {
    const {signInUsingGoogle, handleRegistration, handlePasswordChange, handleEmailChange, error} = useFirebase();
    
    return (
        <div>
            <div className="">
            <Container className="d-lg-flex justify-content-lg-center">
                <Form onSubmit={handleRegistration} className="mt-5 ms-5 me-5">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control onBlur={handleEmailChange} type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onBlur="handlePasswordChange" type="password" placeholder="Password" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control onBlur="handlePasswordChange" type="password" placeholder="Confirm Password" />
                    </Form.Group>
                    <p className="text-danger">{error}</p>
                    <Button className="btn btn-primary" variant="primary" type="submit">
                        Submit
                    </Button>
                    <p className="my-4">Already Register? 
                        <Link className="text-decoration-none" to="/login"> Log In</Link>
                    </p>
                    
                    
                    
                </Form>
            </Container>
            </div>
                    <p className="text-center">- Orders Register -</p>
            <div className="d-flex justify-content-center mb-5">
               <button onClick={signInUsingGoogle} className="btn btn-outline-primary">Register With Google</button>
            </div>
        </div>
    );
};

export default Register;