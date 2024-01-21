import { useState, createContext, useContext } from "react";
import MisdemeanourList from "./misdemeanour-list";
import ShowLoading from "../loading/show-loading";
import { MISDEMEANOUR_DATA_HEADINGS, MisdemeanourHeading} from "../../types/misdemeanour_client_types";
import MisdemeanourTableHeading from "./misdemeanour-heading";
import FilterMisdemeanoursForm from "./filter-misdemeanours-form";
import { SelectOptions, initialValues} from "../../data/filter_misdemeanour_form_data";
import { MisdemeanourContext } from "./misdemeanour-data-wrapper";
import useMisdemeanourRoute from "../../hooks/use_misdemeanour_route";

export type FilterContextType = [SelectOptions, React.Dispatch<React.SetStateAction<SelectOptions>>] | [];

export const MisdemeanourFilterContext = createContext<FilterContextType>([]);

export const MisdemeanourContainer : React.FC = () => {

const [misdemeanourData] =  useContext(MisdemeanourContext);

const [selectedFilter, setSelectedFilter] = useState({...initialValues});

const routeTo = useMisdemeanourRoute();

return (
<>
    <h1 className = "page__title">Misdemeanours</h1>

    {<MisdemeanourFilterContext.Provider value={[selectedFilter, setSelectedFilter]}>
    <FilterMisdemeanoursForm routeTo = {routeTo}/>
    </MisdemeanourFilterContext.Provider>}

    <section className = "container">
    <div className = "row row--headings">
    {MISDEMEANOUR_DATA_HEADINGS.map((heading: MisdemeanourHeading, index: number) => {
    return <MisdemeanourTableHeading key={index.toString()} heading={heading} />} 
    )}
    </div>
    {misdemeanourData && misdemeanourData.length === 0 && 
	<ShowLoading /> }
    
    {misdemeanourData && misdemeanourData.length > 0 &&
    <MisdemeanourFilterContext.Provider value={[selectedFilter, setSelectedFilter]}>
    <MisdemeanourList routeTo = {routeTo}/>
    </MisdemeanourFilterContext.Provider>} 

    </section>
</>
)
}