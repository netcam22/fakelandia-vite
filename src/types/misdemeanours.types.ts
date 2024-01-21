export const MISDEMEANOURS = [
	'rudeness',
	'vegetables',
	'lift',
	'united',
] as const;
export type MisdemeanourKind = (typeof MISDEMEANOURS)[number];

export const JUST_TALK = 'just-talk';
export type JustTalk = typeof JUST_TALK;

export interface Misdemeanour  {
	citizenId: number;
	misdemeanour: MisdemeanourKind;
	date: string; 
}
