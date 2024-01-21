import { MISDEMEANOURS } from "../types/misdemeanours.types";
import {FormSelectInputObject} 
from "../types/form.types";
import { MISDEMEANOUR_OPTIONS } from "../types/misdemeanour_client_types";

const today = new Date().toLocaleDateString("en-GB");
const selectAll = `Show all Misdemeanours from ${today}`;
const MISDEMEANOUR_FILTER_OPTIONS = [selectAll, ...MISDEMEANOUR_OPTIONS];
const MISDEMEANOUR_FILTER_OPTION_VALUES = ["all", ...MISDEMEANOURS];

export type MisdemeanourFilterKind = (typeof MISDEMEANOUR_FILTER_OPTIONS)[number];
export type SelectOptions = {[key: string]: MisdemeanourFilterKind};

export const filterFormSelectInput: Array<FormSelectInputObject> = [
    {
    id: "filter-misdemeanours",
    title: "Filter",
    role: "filterMisdemeanours",
    regex: [/^all{1}|rudeness{1}|vegetables{1}|lift{1}|united{1}$/],
    errorMessage: ['error: invalid selection'],
    options: [...MISDEMEANOUR_FILTER_OPTIONS],
    optionValues: [...MISDEMEANOUR_FILTER_OPTION_VALUES]
    }
];

export const initialValues: SelectOptions = filterFormSelectInput.reduce((acc, field) => {return {...acc, [field.role]: "all"}}, {});