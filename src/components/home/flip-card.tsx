import { NavLink } from "react-router-dom";
import { MisdemeanourIcon, MisdemeanourTitle } from "../../types/misdemeanour_client_types";

export interface FlipCardProps {
    title: MisdemeanourTitle;
    count: number;
    image: string;
    alt: string;
    misdemeanourType: string;
    icon: MisdemeanourIcon;
}

const FlipCard: React.FC<FlipCardProps> = ({title, count, icon, image, alt, misdemeanourType}) => {

    const cssClassFront = `flip-card__front flip-card__front--${misdemeanourType}`; 
    const cssClassBack = `flip-card__back flip-card__back--${misdemeanourType}`;
    const link = `/misdemeanours/${misdemeanourType}`;
    return (
        <div className="flip-card">
        <div className="flip-card__inner">
            <div className={cssClassFront}>
            <h1 className="flip-card__inner--title">{title}</h1> 
            <p className="flip-card__inner--icon">{icon}</p> 
            <img className = "flip-card__inner--logo" 
                alt = {alt}
                src= {image}></img>
            </div>
            <div className={cssClassBack}>
                <h1 className="flip-card__inner--link">
                    <NavLink to = {link}>{title} Misdemeanours</NavLink></h1> 
                <p className="flip-card__inner--text">Misdemeanours reported today: {count}</p> 
            </div>
        </div>  
    </div>
    );
}
export default FlipCard;