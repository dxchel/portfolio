import { Container, Row, Col } from "react-bootstrap";
import Carousel, { ResponsiveType } from "react-multi-carousel";
import { SkillCard } from './SkillCard';

export const Skills = () => {
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

    const skills: { skill: string, percent: number }[] = [
        {
            skill: "Python Scripting",
            percent: 80,
        },
        {
            skill: "Linux OS",
            percent: 70,
        },
        {
            skill: "C++ Coding",
            percent: 60,
        },
    ]

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
                                {
                                    skills.map((skill, index) => {
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
