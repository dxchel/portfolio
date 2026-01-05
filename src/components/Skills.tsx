import { Container, Row, Col } from "react-bootstrap";
import Carousel, { ResponsiveType } from "react-multi-carousel";
import { SkillCard } from './SkillCard';

export const Skills = (): React.ReactElement => {
    const responsive: ResponsiveType = {
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

    const lSkills: { skill: string, percent: number }[] = [
        {
            skill: "Python Scripting",
            percent: 80,
        },
        {
            skill: "C/C++ Coding",
            percent: 60,
        },
        {
            skill: "Bash scripting",
            percent: 50,
        },
        {
            skill: "Typescript",
            percent: 40,
        },
        {
            skill: "Verilog",
            percent: 40,
        },
        {
            skill: "Java",
            percent: 40,
        },
    ];
    const tSkills: { skill: string, percent: number }[] = [
        {
            skill: "Linux OS and FS",
            percent: 70,
        },
        {
            skill: "Git/GitHub",
            percent: 60,
        },
        {
            skill: "Agile",
            percent: 50,
        },
        {
            skill: "Testing",
            percent: 50,
        },
        {
            skill: "Debugging",
            percent: 50,
        },
        {
            skill: "Docker",
            percent: 50,
        },
        {
            skill: "React",
            percent: 40,
        },
        {
            skill: "Embedded systems",
            percent: 40,
        },
        {
            skill: "CI/CD",
            percent: 40,
        },
        {
            skill: "AI",
            percent: 40,
        },
        {
            skill: "Cloud",
            percent: 30,
        },
        {
            skill: "Jenkins",
            percent: 30,
        },
        {
            skill: "Unity",
            percent: 20,
        },
    ];
    const sSkills: { skill: string, percent: number }[] = [
        {
            skill: "Fast learner",
            percent: 100,
        },
        {
            skill: "Commited",
            percent: 100,
        },
        {
            skill: "Responsible",
            percent: 100,
        },
        {
            skill: "Problem Solving",
            percent: 90,
        },
        {
            skill: "Critical thinking",
            percent: 90,
        },
        {
            skill: "Adaptability",
            percent: 90,
        },
        {
            skill: "Creative",
            percent: 85,
        },
        {
            skill: "Mentoring",
            percent: 80,
        },
        {
            skill: "Leadership",
            percent: 75,
        },
        {
            skill: "Communicative",
            percent: 75,
        },
        {
            skill: "Mathematics",
            percent: 75,
        },
    ]

    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-box">
                            <h2>Skills</h2>
                            <p>Wide array of skills acquired in college, at work, and in my everyday life. Gained by following my values and always curious to learn anything with an open mind.</p>
                            <h3>Programming languajes</h3>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                {
                                    lSkills.map((skill, index) => {
                                        return (
                                                <SkillCard key={index} {...skill} />
                                            )
                                    })
                                }
                            </Carousel>
                            <br/>
                            <br/>
                            <h3>Tools</h3>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                {
                                    tSkills.map((skill, index) => {
                                        return (
                                                <SkillCard key={index} {...skill} />
                                            )
                                    })
                                }
                            </Carousel>
                            <br/>
                            <br/>
                            <h3>Soft skills</h3>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                {
                                    sSkills.sort(() => Math.random() - 0.5).map((skill, index) => {
                                        return (
                                                <SkillCard key={index} {...skill} />
                                            )
                                    })
                                }
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <div className="background-skills-down"/>
        </section>
    )
}
