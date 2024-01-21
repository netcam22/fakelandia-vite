import { Misdemeanour, MisdemeanourKind} from "./misdemeanours.types";
export interface MisdemeanourObject extends Misdemeanour {
    indexValue: string,
}
export type MisdemeanourHeading = "Citizen Id" | "Date" | "Misdemeanour" | "Punishment Idea";

export type MisdemeanourHeadings  = Array<MisdemeanourHeading>;

export const MISDEMEANOUR_DATA_HEADINGS : 
MisdemeanourHeadings  = ["Citizen Id", "Date", "Misdemeanour", "Punishment Idea"];

export type MisdemeanourTitle  = "Mild Public Rudeness" | "Not Eating Your Vegetables" |
"Speaking in a Lift" | "Supporting Manchester United";
export type MisdemeanourIcon  = "🤪" | "🥗" | "🗣" | "😈";

export type MisdemeanourView = {
	[key in MisdemeanourKind]: { icon: MisdemeanourIcon; desc: MisdemeanourTitle; };
};

export const MISDEMEANOUR_VIEWS: MisdemeanourView = {
	rudeness: {icon: "🤪", desc: "Mild Public Rudeness"},
	vegetables:  {icon: "🥗", desc: "Not Eating Your Vegetables"},
	lift: {icon: "🗣", desc: "Speaking in a Lift"},
	united:  {icon: "😈", desc: "Supporting Manchester United"}
 } as const;

 export const MISDEMEANOUR_OPTIONS = Object.values(MISDEMEANOUR_VIEWS).map((view) => `${view.desc} ${view.icon}`);

 export type MisdemeanourCountType = {[key : string] : number};
