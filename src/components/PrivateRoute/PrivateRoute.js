import React from 'react';
import { Button, Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import './PrivateRoute.css';

const PrivateRoute = ({ children, ...rest }) => {
    const {user, isLoading} = useAuth();

    if (isLoading) {
        return <Button className="spinner my-5 text-light" variant="primary" disabled>
                    <Spinner
                    as="span"
                    animation="border"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                    />
                    <p className="ms-2 d-inline text-light">Loading...</p>
                </Button>
    }

    return (
        <Route
        {...rest}
        render={({ location }) =>
            user.email ? (
            children
            ) : (
            <Redirect
                to={{
                pathname: "/login",
                state: { from: location }
                }}
            />
            )
        }
        />
    );
};

export default PrivateRoute;