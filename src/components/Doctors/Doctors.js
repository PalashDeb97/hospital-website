import React from 'react';
import { Container } from 'react-bootstrap';

const Doctors = () => {
    return (
        <Container className="">
            <div>
                <h1 className="text-center my-5">MEET OUR DOCTORS</h1>
            </div>
            <div className="mb-5">
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    <div className="col">
                        <div className="card">
                            <img src="https://heatmaponline.com/html/abrarpro/images/doctors/1.jpg" className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h4 className="card-title">DR. ANNA OLIVIA</h4>
                                <p className="card-text">MBBS, MCPS, ACORL, PhD, MSc (Audiology), FCPS (ENT), FRCS (Glasgow).</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src="https://heatmaponline.com/html/abrarpro/images/doctors/2.jpg" className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h4 className="card-title">DR. DAVID MOKLES</h4>
                                <p className="card-text">MBBS, MSc (Gastro), FACG (USA), FICP (India), FRCP (Ireland), FRCP (UK).</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src="https://heatmaponline.com/html/abrarpro/images/doctors/3.jpg" className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h4 className="card-title">DR. ZOE LILY</h4>
                                <p className="card-text">MBBS, MD (Neurology), FCPS (Medicine), Fellow in Neurology (USA).</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Doctors;