import { createSlice } from '@reduxjs/toolkit';
import { DayData } from '../../model/Entity';
import { formatDateToNumber } from '../../shared/Utils';

const initialState: DayData = {
	year: 2024,
	month: 0,
	day: 1,
	startday: 20240101
};

export const dayDataSlice = createSlice({
	name: 'dayData',
	initialState: initialState,
	reducers: {
		setDate: (state, action) => {
			state = action.payload;
		},
		oneWeekBefore: (state) => {
			// 数値を文字列に変換
			const inputString = state.startday.toString();

			// 年、月、日を切り出す
			const year = parseInt(inputString.slice(0, 4), 10);
			const month = parseInt(inputString.slice(4, 6), 10);
			const day = parseInt(inputString.slice(6, 8), 10);

			const weekDay = new Date(year, month, day);
			weekDay.setDate(weekDay.getDate() - 7);
			state.startday = formatDateToNumber(weekDay);
		}
	}
	//自動で同じ名前のAction Creatorが作成される。
});

export const { setDate, oneWeekBefore } = dayDataSlice.actions; //actionCreatorのこと

export default dayDataSlice.reducer;
