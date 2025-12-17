import "react-multi-carousel/lib/styles.css";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const SkillCard = ({ skill, percent}: { skill: string, percent: number }) => {
    return (
        <TrackVisibility>
            {({ isVisible }) =>
            <div className={isVisible ? "animate__animated animate__zoomIn item" : "item"}>
                <div className="skill">
                    <div className="outer">
                        <div className="inner">
                            <svg width="160px" height="160px">
                                <defs>
                                    <linearGradient id="GradientColor">
                                        <stop offset="0%" stopColor="#DA22FF" />
                                        <stop offset="100%" stopColor="#9733EE" />
                                    </linearGradient>
                                </defs>
                                <circle id={isVisible ? "circles" : ""} style={{"--percent": 450 - percent/100*450} as React.CSSProperties} cx="80" cy="80" r="70" strokeLinecap="round" />
                            </svg>
                        </div>
                    </div>
                </div>
                <h5>{skill}</h5>
            </div>}
        </TrackVisibility>
    )
}