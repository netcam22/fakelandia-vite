export interface SelectOptionProps{
    option: string;
	optionValue: string;
}

export const SelectOption : React.FC<SelectOptionProps> = ({option, optionValue}) => (
    <option value={optionValue}>{option}</option>
);