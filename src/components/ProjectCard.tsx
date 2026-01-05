import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, url = '' }: { title: string, description: string, imgUrl: string, url?: string }): React.ReactElement => {
    return (
        <Col size={12} sm={6} md={4}>
            <div className="proj-imgbox">
                <img src={imgUrl} alt={title}/>
                <div className="proj-txt">
                    <h4>{url !== '' ? <a href={url} target="_blank" rel="noopener noreferrer">{title}</a> : title }</h4>
                    <span>{description}</span>
                </div>
            </div>
        </Col>
    )
}