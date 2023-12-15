import { DayData, DayEntity } from '../model/Entity';

export const daysOfWeek = ['日', '月', '火', '水', '木', '金', '土'];

export function formatDateToNumber(date: Date) {
	const year = date.getFullYear().toString();
	const month = (date.getMonth() + 1).toString().padStart(2, '0'); // 月は0から始まるため+1する
	const day = date.getDate().toString().padStart(2, '0');

	// 数値型に整形
	const numericDate = parseInt(`${year}${month}${day}`, 10);

	return numericDate;
}

function createDay(date: Date, startday: Date) {
	const isHoliday = date.getDay() === 0 || date.getDay() === 6;
	const day: DayEntity = {
		year: date.getFullYear(),
		month: date.getMonth() + 1,
		day: date.getDate(),
		startday: formatDateToNumber(startday),
		dayname: date.getDay(),
		d_work: isHoliday ? 0.0 : 8.0,
		d_over: 0,
		d_night: 0,
		d_sum: isHoliday ? 0.0 : 8.0,
		holiday: ''
	};
	return day;
}

export function getNumberOfWeek(startday: Date) {
	// その月の最初の日を取得
	const firstDayOfMonth = new Date(
		startday.getFullYear(),
		startday.getMonth(),
		1
	);

	// 月曜日がその月の何週目か計算
	const weekNumber = Math.ceil(
		(startday.getDate() - firstDayOfMonth.getDate() + 1) / 7
	);

	return weekNumber;
}

export function getToday() {
	// 現在の日付を取得
	const currentDate = new Date();

	// その週の日曜日を求める
	const sunday = new Date(
		currentDate.getFullYear(),
		currentDate.getMonth(),
		currentDate.getDate() - currentDate.getDay()
	);

	// その週の月曜日を求める
	const monday = new Date(sunday);
	monday.setDate(sunday.getDate() - 6);

	const today: DayData = {
		year: currentDate.getFullYear(),
		month: currentDate.getMonth(),
		day: currentDate.getDate(),
		startday: formatDateToNumber(monday)
	};

	return today;
}

export function createDays(date: Date) {
	// その週の基準となる日(月曜日)を求める
	const baseday = new Date(
		date.getFullYear(),
		date.getMonth(),
		date.getDate() - date.getDay() + 1
	);

	// 6日後の日付までの日にち情報をリストにして取得
	const pastDaysList = Array.from({ length: 7 }, (_, index) => {
		const currentDate = new Date(baseday);
		currentDate.setDate(currentDate.getDate() + index);
		return createDay(currentDate, baseday);
	});
	return pastDaysList;
}

export function numToStringFormatter(time: number): string {
	const integerPart = Math.floor(time); // 整数部分
	const decimalPart = Math.round((time - integerPart) * 100); // 小数部分

	const formattedHours = String(integerPart).padStart(2, '0');
	const formattedMinutes = String(decimalPart).padStart(2, '0');
	return `${formattedHours}:${formattedMinutes}`;
}

export function stringToTimeFormatter(time: string): {
	hours: number;
	minutes: number;
} {
	const [hours, minutes] = time.split(':').map(Number);
	return { hours, minutes };
}

export function timeToNumFormatter(hours: number, minutes: number): number {
	return hours + minutes / 100;
}
