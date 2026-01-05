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
import pianoImg from "../assets/img/piano.png";
import cardioImg from "../assets/img/cardio.png";
import powerImg from "../assets/img/power.png";
import protocolImg from "../assets/img/protocol.png";
import climberImg from "../assets/img/climber.png";
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


export const Projects = (): React.ReactElement => {
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
            description: "Several data processing scripts using wsl, bash and python for web scraping, system management, file system search and data processing into several different formats depending on the needs.",
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
            title: "Pyramid VR project",
            description: "VR project using photogrammetry and blender for modeling, and using LabView and Unity for interacting with the models. In colaboration with the Mexican National Anthropology and History Institute.",
            imgUrl: vrImg,
        },
        {
            title: "AR pokemon finder",
            description: "Unity project that ran on the phone, using the GPS to find pokemons in a fixed area of the real world, taken a bit further by implementing a shader for pokemons to be shown differently if they were found behind a building.",
            imgUrl: arImg,
        },
        {
            title: "Neural Networks",
            description: "Neural networks made using Keras and MatLab for object detection, classification and basic generation.",
            imgUrl: brainImg,
        },
        {
            title: "MIPS microprocessor",
            description: "MIPS multicycle system designed in SystemVerilog, it got the instructions in machine language and executed the code, tested using the UVM testing methodology and Python/C++ for the automation of testbench creation.",
            imgUrl: mipsImg,
        },
        {
            title: "Protocol projects",
            description: "FPGA projects involving protocol communication for displaying figures into a VGA display and I² communication.",
            imgUrl: protocolImg,
        },
        {
            title: "Electrocardiogram",
            description: "Circuit using OpAmps for filtering and amplifying the signal to make an electrocardiogram and an oxymeter, with an arduino frequency counter that displayed both frequencies in a display, using SPICE for circuit design.",
            imgUrl: cardioImg,
        },
        {
            title: "4 octave piano",
            description: "4 Octave piano program made in Assembly for PIC, created a single function that, given the correct parameters, gave the needed frequency in the octave selected.",
            imgUrl: pianoImg,
        },
        {
            title: "Sensor detectors with App communication",
            description: "PIC circuit to detect the signal on several sensors for light, temperature and magnetism that communicated with a phone app using a bluetooth module to display readings.",
            imgUrl: picImg,
        },
        {
            title: "High power control circuits",
            description: "High power control circuits using a series of transistors and the signal from a microcontroler.",
            imgUrl: powerImg,
        },
        {
            title: "FPGA Climber robot",
            description: "A simple hydraulic climber robot using an FPGA module.",
            imgUrl: climberImg,
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

    // @dxchel: isVisible animations not working
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
                                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__fadeInLeft" : ""}>
                                        <Tab.Pane eventKey="personal">
                                            <p>I'm a tech enthusiast, always learning new technologies and tools while looking for challenges.</p>
                                            <Row>
                                                {
                                                    pProjects.map((project, index) => {
                                                        return (<ProjectCard key={index} {...project} />)
                                                    })
                                                }
                                            </Row>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="work">
                                            <p>At work I go above and beyond, making projects to make my work faster and more efficient making the management of a large batch of systems with their own information, configuration and logs easier and processing said data for reporting.</p>
                                            <Row>
                                                {
                                                    wProjects.sort(() => Math.random() - 0.5).map((project, index) => {
                                                        return (<ProjectCard key={index} {...project} />)
                                                    })
                                                }
                                            </Row>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="college">
                                            <p>In college I made a lot of projects from electrical circuits, microchips, programming, simulation, VR, AR, among others, always delivering top quality and even going the extra mile trying to find better processes or more features for a better product.</p>
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