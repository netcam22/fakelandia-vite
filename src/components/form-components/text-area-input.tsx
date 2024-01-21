import { ChangeEventHandler } from "react";
import { InputProps } from '../../types/form.types';
import { ErrorMessage } from "./error-message";

export interface TextAreaInputProps extends InputProps {
	onChange: ChangeEventHandler<HTMLTextAreaElement>;
	size: {
		rows: number;
		cols: number;
	}
}

export const TextAreaInput : React.FC<TextAreaInputProps> = (props) => {

	return (
    <>
        <label className='form__label'
		htmlFor={props.role}>{props.title}</label>
        <textarea id={props.role}
		className='form__input'
					rows={props.size.rows}
					cols={props.size.cols}
					value={props.value}
					onChange={props.onChange}  
					/>
    {props.attempted && props.errorMessage !== "" &&
		<ErrorMessage message = {props.errorMessage}/>
		}
	</>
	)
}