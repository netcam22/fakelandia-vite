import { SelectOptions } from "../data/filter_misdemeanour_form_data";
import { MISDEMEANOURS, MisdemeanourKind } from "../types/misdemeanours.types";
import { useParams } from "react-router-dom";

const useMisdemeanourRoute = ()
	: SelectOptions | undefined => {
		const {paramKind} = useParams() as unknown as SelectOptions;
		const param = paramKind as unknown as MisdemeanourKind;
		return MISDEMEANOURS.includes(param)? {paramKind} : undefined;
};

export default useMisdemeanourRoute;