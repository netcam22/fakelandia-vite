import { MisdemeanourObject } from '../types/misdemeanour_client_types';
import {
	Misdemeanour,
	MisdemeanourKind,
	MISDEMEANOURS,
} from '../types/misdemeanours.types';

export const getMisdemeanours = (number: number): MisdemeanourObject[] => {

	function rand(x: number): number {
		return Math.random() * x;
	}
	
	function choose<T>(arr: T[]): T {
		if (!arr) arr = [];
		return arr[Math.floor(Math.random() * arr.length)];
	}

	function setIndexedData(data: Misdemeanour[]): MisdemeanourObject[] {
		const misdemeanours = data.map((item: Misdemeanour, index: number) => {
				return {...item, indexValue : index.toString()}
			});
		return misdemeanours as MisdemeanourObject[];
		}

	const amount = number ?? 50;

	const misdemeanours: Misdemeanour[] = [];

	for (let i = 0; i < amount; i++) {
		misdemeanours.push({
			citizenId: Math.floor(i + rand(37) * rand(967)),
			misdemeanour: choose<MisdemeanourKind>([...MISDEMEANOURS]),
			date: new Date().toLocaleDateString("en-GB"),
		});
	}
	return setIndexedData(misdemeanours);
}

export default getMisdemeanours;