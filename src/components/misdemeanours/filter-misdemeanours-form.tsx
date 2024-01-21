import { ChangeEvent, useContext} from 'react';
import { filterFormSelectInput} 
from '../../data/filter_misdemeanour_form_data';
import { FormSelectInputObject} from '../../types/form.types';
import { SelectOptions } from '../../data/filter_misdemeanour_form_data';
import { MisdemeanourFilterContext } from './misdemeanour-container';
import useSelectFilter from '../../hooks/use_select_filter';
import { useNavigate } from 'react-router-dom';
import { SelectInput } from '../form-components/select-input';

interface MisdemeanourFormProps {
	routeTo: SelectOptions | undefined;
}

const FilterMisdemeanoursForm : React.FC<MisdemeanourFormProps> = ({routeTo}) => {

	const [selectedOption, setSelectedOption] = useContext(MisdemeanourFilterContext);
	const filter = useSelectFilter(selectedOption?.filterMisdemeanours, routeTo?.paramKind);
	const navigate = useNavigate();
	
	function handleChange(event: ChangeEvent<HTMLSelectElement>) {
		if  (event.target.value === "all") {
			navigate("/misdemeanours");
		}
		if (setSelectedOption) {
			setSelectedOption((currentData: SelectOptions) =>
			Object.assign({}, currentData, {
				[event.target.id]: event.target.value,
			})
		)
		}
	}

	return (
		<form className='filter-misdemeanours-form'>
			{filterFormSelectInput.map((field: FormSelectInputObject) => 
				<SelectInput
				key = {field.id}
				title = {field.title} 
				errorMessage = {""}
				value={filter}
				onChange={handleChange} 
				role = {field.role} 
				options = {field.options}
				optionValues = {field.optionValues}
				attempted = {true}
				/>)
			}
		</form>	
	);
};
export default FilterMisdemeanoursForm;