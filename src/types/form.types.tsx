
export interface FormInputObject {
	id: string;
    title: string;
    role: string;
    regex: Array<RegExp>;
    errorMessage: Array<string>;
}
export interface FormSelectInputObject extends FormInputObject {
    options: Array<string>;
    optionValues: Array<string>
}
export interface FormTextAreaInputObject extends FormInputObject {
    size: {
		rows: number;
		cols: number;
	}
}
export interface InputProps {
	title: string;
	role: string;
	value: string;
	errorMessage: string;
	attempted: boolean;
}

export type FormValues = {[key: string]: string};

export type ConfessionPostResponse  = {
    messages: string[];
    success: boolean | null;
    justTalked: boolean | null;
}