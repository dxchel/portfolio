import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import connectImg from "../assets/img/connect.png";

export const Contact = () => {
    const formInitialDetails = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    }
    const [formDetails, setFormDetails] = useState(formInitialDetails);

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const name: string = formDetails.firstName + " " + formDetails.lastName;
        const email: string = formDetails.email;
        const phone: string = formDetails.phone;
        let message: string = formDetails.message;
        if(message === '') message = `Hi David Xchel!\n\nI saw your amazingly super duper portfolio and wanted to reach out! please contact me, my mail is ${email}${phone !== '' ? " and my phone is " + phone : ''}.\n\nThanks!\n${name}`;
        window.location.href = `mailto:davidxchelmh@gmail.com?subject=${name} reaching from your personal portfolio&body=${message}`;
    };

    return (
        <section className="contact" id="connect">
            <Container>
                <Row className="align-items-center">
                    <Col md={6}>
                    <img className="connect-img" src={connectImg} alt="Contact me"/>
                    </Col>
                    <Col>
                        <h2>Get in touch</h2>
                        <form onSubmit={handleSubmit}>
                            <Row>
                                <Col sm={6} className="px-1">
                                <input type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e) => setFormDetails({ ...formDetails, firstName: e.target.value })} required/>
                                </Col>
                                <Col sm={6} className="px-1">
                                <input type="text" value={formDetails.lastName} placeholder="Last Name" onChange={(e) => setFormDetails({ ...formDetails, lastName: e.target.value })} required/>
                                </Col>
                                <Col sm={6} className="px-1">
                                <input type="email" value={formDetails.email} placeholder="Email Address" onChange={(e) => setFormDetails({ ...formDetails, email: e.target.value })} required/>
                                </Col>
                                <Col sm={6} className="px-1">
                                <input type="tel" value={formDetails.phone} placeholder="Phone" onChange={(e) => setFormDetails({ ...formDetails, phone: e.target.value })}/>
                                </Col>
                                <Col>
                                <textarea rows={6} value={formDetails.message} placeholder="Message" onChange={(e) => setFormDetails({ ...formDetails, message: e.target.value })}/>
                                    <button type="submit"><span>Mail</span></button>
                                </Col>
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
