import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router';

const ServicesCard = () => {

    let {id} = useParams()
    const [details, setDetails] = useState([]);
    const [singleDetails, setSingleDetails] = useState({});

    useEffect( () => {
        fetch('/fakeDetails.json')
            .then(res => res.json())
            .then(data => setDetails(data))
    },[]);

    useEffect( () => {
        const fullDetails = details.find((detail) => detail.id === id);
        setSingleDetails(fullDetails)
    }, [details]);

    return (
        <Container className=" my-5">
            <div className="row row-cols-1 row-cols-md-1 g-4">
                <div className="col">
                    <div className="card">
                    <img src={singleDetails?.image} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title fw-bold">SERVICES NAME : {singleDetails?.name}</h5>
                        <h6>Price : {singleDetails?.price}</h6>
                        <p className="card-text">Details : {singleDetails?.details}</p>
                    </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default ServicesCard;