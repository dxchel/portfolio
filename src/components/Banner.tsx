import { useState, useEffect } from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import { ArrowRightCircle } from "react-bootstrap-icons";
import bannerImg from '../assets/img/banner.png';
import TrackVisibility from 'react-on-screen';
import { useCookies } from 'react-cookie';
import 'animate.css';

export const Banner = (): React.ReactElement => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(370);
    const [cookies, setCookies] = useCookies(['visited']);
    const [visited, setVisited] = useState(true);
    const toRotate: Array<string> = "Developer Engineer Tester Explorer Creative Teacher".split(" ");
    const period: number = 1300;

    useEffect(() => {
        if(!cookies.visited){
            setCookies('visited', true, { path: '/', maxAge: 60*60*24 });
            setVisited(false);
        }
        // eslint-disable-next-line
        let ticker: NodeJS.Timer = setInterval(() => {
            tick();
        }, delta)

        return () => { clearInterval(ticker)};
    // eslint-disable-next-line
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
            } else setDelta(Math.max(50, delta/2));
        } else if(updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else setDelta(370 - Math.random()*150);
    }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                        {({ isVisible }) =>
                        <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                <span className="tagline">Welcome<em>{visited ? ' back' : ' '}</em> to my Portfolio</span>
                            <h1>{`Hi, I'm David Xchel!`}</h1>
                            <h1><span className="wrap">{text}</span></h1>
                            <p>I'm a very curious, Fast learning and people focused Mechatronics engineer with 4 years of professional experience in Functional Validation.</p>
                            <p>I've always loved a good challenge, this has led me to learn a lot about very different cultures and tools, from tackling the national Math olympiad and taking bronce home to my mobility program where I collaborated and lived with very contrasting mindsets in malaysia, I believe that all knowledge and experiences we get helps us even in the most unexpected of situations. At the same time the best thing to do with this knowledge is to share it, that way we build something far bigger than our individual goals and helps us stay connected in a world that's growing apart.</p>
                            <p>When not working I like to find stuff to keep my mind busy, learn new things and challenge my way of thinking, but also love music, movies, video games, playing guitar, exploring, running and finding new weird details in the world.</p>
                            <Nav.Link href='#connect'><button>Let's connect!<ArrowRightCircle size={25} /></button></Nav.Link>
                        </div>}
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                            <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                                <img src={bannerImg} alt="https://www.reshot.com/free-svg-icons/item/worldwide-shipping-ZFBPUD562K/"/>
                            </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
