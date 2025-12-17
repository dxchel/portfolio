import { Container, Nav, Tab, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import { ProjectCard } from './ProjectCard';

export const Projects = () => {
    const projects: { title: string, description: string, imgUrl: string }[] = [
        {
            title: "Project1",
            description: "Description",
            imgUrl: logo,
        },
        {
            title: "Project2",
            description: "Description",
            imgUrl: logo,
        },
        {
            title: "Project3",
            description: "Description",
            imgUrl: logo,
        },
        {
            title: "Project4",
            description: "Description",
            imgUrl: logo,
        },
        {
            title: "Project5",
            description: "Description",
            imgUrl: logo,
        },
    ]

    return(
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p>I've worked on several areas of engineering, ranging from software, electrical and even mechanical engineering. Here are some of the most important.</p>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Work</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">College</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Personal</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Pane eventKey="first">
                                <Row>
                                    {
                                        projects.sort(() => Math.random() - 0.5).map((project, index) => {
                                            return (<ProjectCard key={index} {...project} />)
                                        })
                                    }
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                            </Tab.Pane>
                            <Tab.Pane eventKey="third">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                            </Tab.Pane>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}