import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl }: { title: string, description: string, imgUrl: string }) => {
    return (
        <Col sm={6} mc={4}>
            <div className="proj-imgbox">
                <img src={imgUrl} alt={title}/>
                <div className="proj-txt">
                    <h4>{title}</h4>
                    <span>{description}</span>
                </div>
            </div>
        </Col>
    )
}