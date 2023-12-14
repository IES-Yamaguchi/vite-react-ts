import { configureStore } from '@reduxjs/toolkit';
import dayDataReducer from './slices/dayDataSlice';

export const store = configureStore({
	reducer: {
		dayData: dayDataReducer
	}
});
