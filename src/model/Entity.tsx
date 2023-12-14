export interface DayData {
	year: number;
	month: number;
	day: number;
	startday: number;
}

export interface DayEntity extends DayData {
	dayname: number;
	d_work: number;
	d_over: number;
	d_night: number;
	d_sum: number;
	holiday: string;
}

export interface WeekEntity extends DayData {
	compensatory: string;
	problem: string;
	announce: string;
	plan: string;
	impression: string;
	w_work: number;
	w_over: number;
	w_night: number;
	w_sum: number;
}
