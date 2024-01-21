import { ChangeEventHandler} from 'react';
import { InputProps } from '../../types/form.types';
import { SelectOption } from "./select-option";
import { ErrorMessage } from './error-message';

export interface SelectInputProps extends InputProps{
	onChange: ChangeEventHandler<HTMLSelectElement>;
	options: Array<string>;
	optionValues: Array<string>;
}

export const SelectInput : React.FC<SelectInputProps> = (props) => {

	return (
    <>
        <label className='form__label'
		htmlFor={props.role}>{props.title}</label>
        <select className='form__input'
			id={props.role} value={props.value} 
			onChange={props.onChange}  >
			{props.options.map((option, index) => 
			<SelectOption key = {index.toString()}
			option ={option} optionValue ={props.optionValues[index]} />)}
		</select>
        {props.attempted && props.errorMessage !== "" &&
		<ErrorMessage message = {props.errorMessage}/>
		}
    </> )
}