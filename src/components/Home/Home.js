import React from 'react';
import { Container } from 'react-bootstrap';
import About from '../About/About';
import Doctors from '../Doctors/Doctors';
import Servicess from '../Servicess/Servicess';

const Home = () => {
    return (
        <Container>
            <div className="d-lg-flex justify-content-lg-center mt-5">
                <div>
                    <img className="" src="/igm.jpg" alt="" />
                </div>
                <div className="d-flex align-items-lg-center ms-4">
                    <div>
                        <h1>WELCOME TO OUR ABRARPRO</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus maiores quas nemo, rerum vitae cumque ipsa id aut mollitia soluta! Expedita quod reprehenderit possimus iste repellendus natus consequatur.</p>
                    </div>
                </div>
            </div>
            <Servicess/>
            <Doctors/>
            <About/>
        </Container>
    );
};

export default Home;