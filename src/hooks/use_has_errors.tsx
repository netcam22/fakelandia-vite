import { FormValues } from "../types/form.types";

const useHasErrors = (errors: FormValues) => {

    const errorData = Object.values(errors).reduce((acc: string, value) => 
      acc = acc + value, "");
    return errorData === ""? false: true;

};
export default useHasErrors;
