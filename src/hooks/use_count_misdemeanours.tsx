import { MisdemeanourCountType, MisdemeanourObject } from '../types/misdemeanour_client_types';
import { MISDEMEANOURS, MisdemeanourKind } from '../types/misdemeanours.types';

export const countValues: MisdemeanourCountType = 
{rudeness: 0, vegetables: 0, lift: 0, united: 0};

const useCountMisdemeanours = (misdemeanourData: Array<MisdemeanourObject> | undefined) => {

  if (misdemeanourData) {
    return misdemeanourData.map((row) => {
      return MISDEMEANOURS.filter((item: MisdemeanourKind) => {return item === row.misdemeanour});
  }).reduce((acc, item): MisdemeanourCountType => {
      return {...acc, [item[0]]: acc[item[0]]+1} 
  }, countValues);
  }
  else {
    return countValues;
  }

};
export default useCountMisdemeanours;
