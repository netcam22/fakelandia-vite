import { SelectOptions } from '../data/filter_misdemeanour_form_data';
import { MisdemeanourObject } from '../types/misdemeanour_client_types';
import useSelectFilter from './use_select_filter';

const useMisdemeanourFilter = (misdemeanourData: Array<MisdemeanourObject> | undefined, 
  selectedFilter: SelectOptions | undefined, routeTo: SelectOptions | undefined) => {
    
  const filter = useSelectFilter(selectedFilter?.filterMisdemeanours, routeTo?.paramKind);

  if (misdemeanourData) {
    if (filter && (filter !== "all" && filter !== "")) {
    return misdemeanourData.filter((row: MisdemeanourObject) => row.misdemeanour 
        === filter);
    }
    else {
      return misdemeanourData;
    }
  }
  return null

};
export default useMisdemeanourFilter;
