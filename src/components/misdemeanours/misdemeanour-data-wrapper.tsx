import { useState, createContext } from "react";
import getMisdemeanours from "../../helpers/getMisdemeanours";
import { Router } from "../router/router";

import { MisdemeanourObject} from "../../types/misdemeanour_client_types";
import ResponseError from "../response-error/response-error";

export type MisdemeanourContextType = [MisdemeanourObject[], 
        React.Dispatch<React.SetStateAction<MisdemeanourObject[]>>] | [];

export const MisdemeanourContext = createContext<MisdemeanourContextType>([]);

const misdemeanours: MisdemeanourObject[] = getMisdemeanours(10);

export const MisdemeanourDataWrapper : React.FC = () => {

const [misdemeanourData, setMisdemeanourData] = useState(misdemeanours);
const responseError = "";

return (
        <>
        {responseError === "" &&
        <MisdemeanourContext.Provider value={[misdemeanourData, setMisdemeanourData]}>
        <Router/>
        </MisdemeanourContext.Provider>
        }
        {responseError !== "" &&
        <ResponseError errorMessage={responseError}/>
        }           
        </>
)
}