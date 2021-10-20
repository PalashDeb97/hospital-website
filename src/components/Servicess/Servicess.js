import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Servicess = () => {
    const [services, setServices] = useState([]);
    useEffect( () => {
        fetch('/fakeData.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [] )

    return (
        <Container className="">
            <div>
                <h1 className="text-center my-5">OUR FEATURED SERVICES</h1>
            </div>
            <div className="mb-5">
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {
                        services.map(service => 
                            
                            <div className="col">
                                <div className="card">
                                    <div className="card-body text-center">
                                        <h4 className="card-title fw-bold">{service?.name}</h4>
                                        <p className="card-text">{service?.details}</p>
                                        <NavLink to={`/servicess/${service?.id}`}>
                                            <button className="btn btn-primary text-light">Details</button>
                                        </NavLink>
                                    </div>
                                </div>
                            </div>

                        )
                    }
                </div>
            </div>
        </Container>
    );
};

export default Servicess;