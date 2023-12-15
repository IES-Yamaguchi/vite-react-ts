import React from 'react';
import SubmitButton from './Atoms/SubmitButton';
import ResetButton from './Atoms/ResetButton';
import WeeklyTable from './Block/WeeklyTable';
import { createDays } from '../shared/Utils';
import { CircularProgress } from '@mui/material';

function WeeklyReportPage() {
	function onSubmitData() {}
	function onResetData() {}
	const days = createDays(new Date());

	return (
		<>
			<div className="todoapp">
				<h1>週報入力フォーム</h1>
				<SubmitButton onSubmitData={onSubmitData} />
				<ResetButton onResetData={onResetData} />
				<WeeklyTable days={days}></WeeklyTable>
				<CircularProgress></CircularProgress>
			</div>
		</>
	);
}
export default WeeklyReportPage;
