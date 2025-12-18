import { Container, Nav, Tab, Row, Col } from "react-bootstrap";
import hanoiImg from "../assets/img/Hanoi.png";
import multiImg from "../assets/img/multi.png";
import portfolioImg from "../assets/img/portfolio.png";
import matImg from "../assets/img/mat.png";
import invImg from "../assets/img/inv.png";
import linuxImg from "../assets/img/linux.png";
import brainImg from "../assets/img/brain.png";
import macadamiaImg from "../assets/img/macadamia.png";
import picImg from "../assets/img/pic.png";
import softImg from "../assets/img/soft.png";
import piImg from "../assets/img/pi.png";
import fpgaImg from "../assets/img/fpga.png";
import circuitsImg from "../assets/img/circuits.png";
import vrImg from "../assets/img/vr.png";
import arImg from "../assets/img/ar.png";
import signalImg from "../assets/img/signal.png";
import simImg from "../assets/img/sim.png";
import mipsImg from "../assets/img/mips.png";
import planImg from "../assets/img/plan.png";
import portingImg from "../assets/img/porting.png";
import processImg from "../assets/img/process.png";
import pythonImg from "../assets/img/python.png";
import { ProjectCard } from './ProjectCard';
import 'animate.css';
import TrackVisibility from 'react-on-screen';


export const Projects = () => {
    const wProjects: { title: string, description: string, imgUrl: string }[] = [
        {
            title: "Python hardware testing",
            description: "Python scripts for the validation of memory functional features for physical processor systems.",
            imgUrl: pythonImg,
        },
        {
            title: "Testing plans",
            description: "Helped develop testing plans for efficient test with full coverage.",
            imgUrl: planImg,
        },
        {
            title: "Porting scripts",
            description: "Self testing script for porting scripts from previous projects into new ones using by processing needed keywords using RegEx and using PyTest for unit testing.",
            imgUrl: portingImg,
        },
        {
            title: "Data processing scripts",
            description: "Several data processing scripts using wsl, bash and python for web scraping, file system search and data processing into several different formats depending on the needs.",
            imgUrl: processImg,
        },
    ]
    const cProjects: { title: string, description: string, imgUrl: string, url?: string}[] = [
        {
            title: "Software projects",
            description: "Software projects using C++ and Java for GUI, serial communication, web connection, among others.",
            imgUrl: softImg,
        },
        {
            title: "Line Follower",
            description: "Line Follower made using RaspberryPi and Python in a multicultural environment.",
            imgUrl: piImg,
        },
        {
            title: "PIC Projects",
            description: "Projects using the PIC microprocessor, involved reading from several sensors, interacting with high power control circuits, speakers and lights and communicating to a phone app for monitoring the system, using Assembly and C.",
            imgUrl: picImg,
        },
        {
            title: "MIPS microprocessor",
            description: "MIPS multicycle system designed in SystemVerilog, using the UVM testing methodology and Python/C++ for the automation of testbench creation.",
            imgUrl: mipsImg,
        },
        {
            title: "FPGA projects",
            description: "Several FPGA implementation projects including a climber robot, an odometer, LED matrix control, Display control, VGA, I² protocol communication, motor control, among others.",
            imgUrl: fpgaImg,
        },
        {
            title: "Neural Networks",
            description: "Neural networks made using Keras and MatLab for object detection, classification and basic generation.",
            imgUrl: brainImg,
        },
        {
            title: "VR projects",
            description: "VR projects using photogrammetry and blender for modeling, and using LabView and Unity for interacting with the models.",
            imgUrl: vrImg,
        },
        {
            title: "AR pokemon finder",
            description: "Unity project that ran on the phone, using the GPS to find pokemons in a fixed area of the real world, taken a bit further by implementing a shader for pokemons to be shown differently if they were found behind a building.",
            imgUrl: arImg,
        },
        {
            title: "Matrix operations",
            description: "Very old project that does operations on matrices. saves a history of previous entries.",
            imgUrl: matImg,
            url: "https://www.github.com/dxchel/Matrices",
        },
        {
            title: "Signal processing",
            description: "Signal processing systems using DACs, ADCs and LabView.",
            imgUrl: signalImg,
        },
        {
            title: "Electrical circuits",
            description: "Several electrical circuits projects using high power control, signal conditioning and filtering. With circuit design and simulation using SPICE. These include power control circuits, an electrocardiogram, among others.",
            imgUrl: circuitsImg,
        },
        {
            title: "Macadamia cracker",
            description: "My thesis, showing my range of work, as It was the design, model and simulation of the parts of a macadamia nut cracker, involving mechanical design using SolidWorks, documentation using LaTex, and simulation using MatLab and Python.",
            imgUrl: macadamiaImg,
        },
        {
            title: "Physical system simulation",
            description: "Simulation of mechanical, electrical and hidraulic systems using MatLab.",
            imgUrl: simImg,
        },
    ]
    const pProjects: { title: string, description: string, imgUrl: string, url?: string }[] = [
        {
            title: "MultiApp",
            description: "Base C++ GUI Application using Gtkmm4 and webkit, current project, it will contain several self contained Gtk apps, currently has a browser with navigation controls.",
            imgUrl: multiImg,
            url: "https://www.github.com/dxchel/MultiApp",
        },
        {
            title: "Portfolio",
            description: "This web page, made using React and Typescript, taking a tutorial as base and personalizing to better fit my needs.",
            imgUrl: portfolioImg,
            url: "https://www.github.com/dxchel/portfolio",
        },
        {
            title: "Hanoi towers game",
            description: "Hanoi towers CLI game made in C++ using NCurses. Disk number can be changed and has play and solve modes using animations.",
            imgUrl: hanoiImg,
            url: "https://www.github.com/dxchel/Hanoi",
        },
        {
            title: "Backery management",
            description: "Small backery management system using Java, JavaFX and MySQL. Had a login window with encrypted passwords and personalized Inkscape icons, wasn't able to fully salvage it",
            imgUrl: invImg,
        },
        {
            title: "Personal Linux system",
            description: "Configured my personal ArchLinux OS learning a lot about the tools and FS present in Linux.",
            imgUrl: linuxImg,
        },
    ]

    return(
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col size={12}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                            <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                                <h2>Projects</h2>
                                <p>I've worked on several areas of engineering, ranging from software, electrical and even mechanical engineering. Here are some of the most important.</p>
                                <Tab.Container id="projects-tabs" defaultActiveKey="personal">
                                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                        <Nav.Item>
                                            <Nav.Link eventKey="personal">Personal</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="work">Work</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="college">College</Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                                        <Tab.Pane eventKey="personal">
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                                            <Row>
                                                {
                                                    pProjects.map((project, index) => {
                                                        return (<ProjectCard key={index} {...project} />)
                                                    })
                                                }
                                            </Row>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="work">
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                                            <Row>
                                                {
                                                    wProjects.sort(() => Math.random() - 0.5).map((project, index) => {
                                                        return (<ProjectCard key={index} {...project} />)
                                                    })
                                                }
                                            </Row>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="college">
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                                            <Row>
                                                {
                                                    cProjects.map((project, index) => {
                                                        return (<ProjectCard key={index} {...project} />)
                                                    })
                                                }
                                            </Row>
                                        </Tab.Pane>
                                    </Tab.Content>
                                </Tab.Container>
                            </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}