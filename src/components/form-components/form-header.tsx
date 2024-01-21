import { NavLink } from "react-router-dom";

export interface FormHeaderProps {
	message: string;
	success: boolean | null;
	justTalked: boolean | null;
}
const FormHeader: React.FC<FormHeaderProps> = ({message, success, justTalked}) => 
	{
		return (
			<>
			{success === null && justTalked === null &&
			<p className = "form__message form__message--normal">{message}</p>
			}
			{success && !justTalked &&
			<>
			<p className = "form__message form__message--response">Thank you for your confession</p>
			<p className = "form__message--navlink form__message--response">
			<NavLink to = "/misdemeanours">View List of Misdemeanours</NavLink></p>
			</>
			}
			{success && justTalked &&
			<p className = "form__message form__message--normal form__message--response">{message}</p>
			}
			{success !== null && justTalked !== null && !success &&
			<p className = "form__message form__message--error form__message--response">{message}</p>
			}
			</>
			)
	}
	
;

export default FormHeader;
