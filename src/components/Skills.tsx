import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import logo from "../assets/img/logo.svg";

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-box">
                            <h2>
                                Skills
                            </h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit ultricies morbi, quis magna condimentum per velit auctor ultrices potenti libero, mattis congue natoque duis at mauris senectus cras. Facilisis lacus in mattis nam netus inceptos nulla nisl, dis hac vehicula ornare dui fames sed ultrices convallis, dictum aptent porttitor vivamus dictumst pellentesque rhoncus.</p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                    <div className="skill">
                                        <div className="outer">
                                            <div className="inner">
                                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                                                    <defs>
                                                        <linearGradient id="GradientColor">
                                                            <stop offset="0%" stopColor="#DA22FF" />
                                                            <stop offset="100%" stopColor="#9733EE" />
                                                        </linearGradient>
                                                    </defs>
                                                    <circle id="circleP" cx="80" cy="80" r="70" strokeLinecap="round" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                    <h5>Python Scripting</h5>
                                </div>
                                <div className="item">
                                    <div className="skill">
                                        <div className="outer">
                                            <div className="inner">
                                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                                                    <defs>
                                                        <linearGradient id="GradientColor">
                                                            <stop offset="0%" stopColor="#DA22FF" />
                                                            <stop offset="100%" stopColor="#9733EE" />
                                                        </linearGradient>
                                                    </defs>
                                                    <circle id="circleL" cx="80" cy="80" r="70" strokeLinecap="round" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                    <h5>Linux OS</h5>
                                </div>
                                <div className="item">
                                    <div className="skill">
                                        <div className="outer">
                                            <div className="inner">
                                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                                                    <defs>
                                                        <linearGradient id="GradientColor">
                                                            <stop offset="0%" stopColor="#DA22FF" />
                                                            <stop offset="100%" stopColor="#9733EE" />
                                                        </linearGradient>
                                                    </defs>
                                                    <circle id="circleC" cx="80" cy="80" r="70" strokeLinecap="round" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                    <h5>C++ Coding</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <div className="background-skills-down"/>
        </section>
    )
}
