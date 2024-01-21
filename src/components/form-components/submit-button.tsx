export interface SubmitButtonProps {
	buttonText: string;
	disable: boolean;
	id: string;
	role: string;
}

export const SubmitButton : React.FC<SubmitButtonProps> = ({buttonText, disable, id, role}) => {
	return (
		<button
		type = 'submit'
		className = "form__button"
		name = {id}
		id={id} 
		role={role} 
		disabled={disable}>
		{buttonText}</ button>
	);
 }