import { MISDEMEANOUR_VIEWS } from "../../types/misdemeanour_client_types";
import {MisdemeanourKind} from "../../types/misdemeanours.types";

export type MisdemeanourItemProps = {
    citizenId: number,
    misdemeanour: MisdemeanourKind,
    date: string,
    indexValue: string
}

const PICSUM_URL = "https://picsum.photos/300/200?random=";
 
const MisdemeanourItem : React.FC<MisdemeanourItemProps> = ({citizenId, misdemeanour, date, indexValue}) => {
    const cssClass = `row row--${misdemeanour}`; 
    return (
    <div className = {cssClass}>
        <div className = "cell">Citizen Id: {citizenId}</div>
        <div className = "cell">Date: {date}</div>
        <div className = "cell">Misdemeanour:  {MISDEMEANOUR_VIEWS[misdemeanour].icon}  {MISDEMEANOUR_VIEWS[misdemeanour].desc}</div>
        <div className = "cell">
            <img alt="" className = "cell__image" src={PICSUM_URL+indexValue} />
        </div>
    </div>
    )
}
export default MisdemeanourItem;
