import { MISDEMEANOURS } from "../types/misdemeanours.types";
import { MISDEMEANOUR_OPTIONS} from "../types/misdemeanour_client_types";
import {ConfessionPostResponse, FormInputObject, FormSelectInputObject, 
    FormTextAreaInputObject, FormValues} 
from "../types/form.types";

export const MISDEMEANOUR_FORM_OPTIONS = ["", ...MISDEMEANOUR_OPTIONS, "I just want to talk"];
export const MISDEMEANOUR_FORM_OPTION_VALUES = ["", ...MISDEMEANOURS, "just-talk"];
export type MisdemeanourFormKind = (typeof MISDEMEANOUR_FORM_OPTIONS)[number];

export const confessionFormMessages: ConfessionPostResponse = {
messages: ["It's very difficult to catch people committing misdemeanours so we appreciate it when citizens confess to us directly.", 
"However, if you're just having a hard day and need to vent then you're welcome to contact us here too. Up to you!"],
success: null,
justTalked: null
}

export const formTextInput: Array<FormInputObject> = [
    {
    id: "input-1",
    title: "Subject",
    role: "subject",
    regex: [/^.{2,20}$/gi, /^[a-z]+$/gi],
    errorMessage: ["must be between 2 and 20 characters", "no spaces, numbers or special characters allowed"]
    }
];

export const formSelectInput: Array<FormSelectInputObject> = [
    {
    id: "input-2",
    title: "Reason for contact",
    role: "reason",
    regex: [/^just-talk{1}|rudeness{1}|vegetables{1}|lift{1}|united{1}$/],
    errorMessage: ['error: invalid selection'],
    options: [...MISDEMEANOUR_FORM_OPTIONS],
    optionValues: [...MISDEMEANOUR_FORM_OPTION_VALUES]
    }
];

export const formTextAreaInput: Array<FormTextAreaInputObject> = [
    {
    id: "input-3",
    title: "Your Confession",
    role: "details",
    regex: [/^.{10,500}$/gi],
    errorMessage: ["must be between 10 and 500 characters"],
    size: {rows: 8, cols: 10}
    }
];

export const formDataArray = [...formTextInput, ...formSelectInput, ...formTextAreaInput];
export const initialFormValues: FormValues = 
formDataArray.reduce((acc, field) => {return {...acc, [field.role]: ""}}, {});