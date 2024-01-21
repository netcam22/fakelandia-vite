import { ChangeEventHandler} from 'react';
import { InputProps } from '../../types/form.types';
import { ErrorMessage } from "./error-message";

export interface TextInputProps extends InputProps {
	onChange: ChangeEventHandler<HTMLInputElement>;
}

export const TextInput : React.FC<TextInputProps> = (props) => {

return (
    <>	<label className='form__label'
	htmlFor={props.role}>{props.title}</label>
        <input id ={props.role}
			className='form__input'
					type ='text'
					value = {props.value}
					onChange={props.onChange} 
		/>
		{props.attempted && props.errorMessage !== "" &&
		<ErrorMessage message = {props.errorMessage}/>
		}
    </> 
	);
};