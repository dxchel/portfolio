import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from '../assets/img/header.svg';

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(370 - Math.random()*100);
    const toRotate = [ "Developer", "Engineer" ]
    const period = 1300;

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
                        <span className="tagline">Welcome to my Portfolio</span>
                        <h1>{`Hi I'm Xchel!`}</h1>
                        <h1><span className="wrap">{text}</span></h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit ultricies morbi, quis magna condimentum per velit auctor ultrices potenti libero, mattis congue natoque duis at mauris senectus cras. Facilisis lacus in mattis nam netus inceptos nulla nisl, dis hac vehicula ornare dui fames sed ultrices convallis, dictum aptent porttitor vivamus dictumst pellentesque rhoncus.</p>
                        <button onClick={() => console.log('connect')}>Let's connect <ArrowRightCircle size={25} /></button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header Img"/>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
