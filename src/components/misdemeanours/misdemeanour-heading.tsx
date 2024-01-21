import { MisdemeanourHeading} from "../../types/misdemeanour_client_types";
interface MisdemeanourTableHeadingProps {
    heading: MisdemeanourHeading;
}

const MisdemeanourTableHeading : React.FC<MisdemeanourTableHeadingProps> = ({heading}) => {
    return (
    <>
        <div className = "cell cell__heading">{heading}</div>
    </>
    )
    }
export default MisdemeanourTableHeading;