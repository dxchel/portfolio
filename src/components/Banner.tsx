import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { ArrowRightCircle } from "react-bootstrap-icons";
import bannerImg from '../assets/img/banner.svg';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(370 - Math.random()*100);
    const toRotate: Array<string> = [ "Developer", "Engineer" ]
    const period: number = 1300;

    useEffect(() => {
        let ticker: NodeJS.Timer = setInterval(() => {
            tick();
        }, delta)

        return () => { clearInterval(ticker)};
    }, [text])

    const tick = () => {
        let fullText: string = toRotate[loopNum];
        let updatedText: string = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if(isDeleting) {
            if(updatedText === '') {
                setIsDeleting(false);
                setLoopNum((loopNum + 1)%toRotate.length);
                setDelta(370);
            } else setDelta(delta*2/3);
        } else if(updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        }
    }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                        {({ isVisible }) =>
                        <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                            <span className="tagline">Welcome to my Portfolio</span>
                            <h1>{`Hi, I'm Xchel!`}</h1>
                            <h1><span className="wrap">{text}</span></h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit ultricies morbi, quis magna condimentum per velit auctor ultrices potenti libero, mattis congue natoque duis at mauris senectus cras. Facilisis lacus in mattis nam netus inceptos nulla nisl, dis hac vehicula ornare dui fames sed ultrices convallis, dictum aptent porttitor vivamus dictumst pellentesque rhoncus.</p>
                            <button onClick={() => console.log('connect')}>Let's connect <ArrowRightCircle size={25} /></button>

                        </div>}
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                            <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                                <img src={bannerImg} alt="Header Img"/>
                            </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
