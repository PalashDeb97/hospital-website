import React from 'react';
import { Container } from 'react-bootstrap';

const About = () => {
    return (
        <Container>
            <div className="text-center my-5">
                <h1>ABOUT</h1>
                <div>
                    <img className="img-fluid" src="https://heatmaponline.com/html/abrarpro/images/about/1.jpg" alt="" />
                </div>
                <div className="d-flex align-items-lg-center ms-4">
                    <div>
                        <h1>WHO WE ARE</h1>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined.

Making this the first true generator on the Internet.It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default About;