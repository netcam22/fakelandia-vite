import { ChangeEvent, FormEventHandler, useContext} from 'react';
import FormHeader from '../form-components/form-header';
import {TextInput} from '../form-components/text-input';
import { SelectInput } from '../form-components/select-input';
import { TextAreaInput } from '../form-components/text-area-input';
import { SubmitButton } from '../form-components/submit-button';
import { formTextInput, formSelectInput, formTextAreaInput} 
from "../../data/confession_form_data";
import {ConfessionPostResponse, FormInputObject, FormSelectInputObject, 
    FormTextAreaInputObject, FormValues} 
from '../../types/form.types';
import { ConfessionFormContext } from './confession';

export type ConfessionFormProps = {
    attempted: boolean; 
    errors: FormValues;
    hasErrors: boolean;
    handleSubmit: FormEventHandler<HTMLFormElement>;
    formMessages: ConfessionPostResponse;
}

const ConfessionForm : React.FC<ConfessionFormProps> = 
({attempted, errors, hasErrors, handleSubmit, formMessages}) => {

    const [input, setInput] = useContext(ConfessionFormContext);

	function handleChange(event: ChangeEvent<HTMLInputElement> | 
		ChangeEvent<HTMLTextAreaElement> | ChangeEvent<HTMLSelectElement>) {

        if (setInput) {
		setInput((currentData) =>
			Object.assign({}, currentData, {
				[event.target.id]: event.target.value,
			})
		);
        }
	}

	return (
		<form className='form form--blue' role = 'confession-form' 
		id = 'confession-form' onSubmit = {handleSubmit}>
			{formMessages.messages.map((message: string, index: number) => 
			<FormHeader key = {index.toString()} message = {message}
			success = {formMessages.success} justTalked = {formMessages.justTalked}/>
			)}
			<fieldset className = "form__fieldset--lemon">

			{input && formTextInput.map((field: FormInputObject) => 

			<TextInput 
				key = {field.id}
				title = {field.title} 
				errorMessage = {errors[field.role]}
				value={input[field.role]} 
				onChange={handleChange} 
				attempted={attempted}
				role = {field.role} 
			/>)
			}

			{input && formSelectInput.map((field: FormSelectInputObject) => 

				<SelectInput
				key = {field.id}
				title = {field.title} 
				errorMessage = {errors[field.role]}
				value={input[field.role]} 
				onChange={handleChange} 
				attempted={attempted} 
				role = {field.role} 
				options = {field.options}
				optionValues = {field.optionValues}
				/>)
			}

			{input && formTextAreaInput.map((field: FormTextAreaInputObject) => 

			<TextAreaInput 
				key = {field.id}
				title = {field.title} 
				errorMessage = {errors[field.role]}
				value={input[field.role]} 
				onChange={handleChange} 
				attempted={attempted} 
				role = {field.role} 
				size = {field.size}
			/>)
			}

			<SubmitButton 
			buttonText = "Confess" 
			id="submitButton" 
			role="submitConfessionButton"
			disable = {(attempted && hasErrors)}
			/>
			</fieldset>

		</form>	
	);
};
export default ConfessionForm;
