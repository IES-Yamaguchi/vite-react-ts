import React from 'react';
import SubmitButton from './Atoms/SubmitButton';
import ResetButton from './Atoms/ResetButton';
import WeeklyTable from './Block/WeeklyTable';
import { createDays } from '../shared/Utils';
import TextBlock from './Block/TextBlock';
import { WeekEntity } from '@/model/Entity';

function WeeklyReportPage() {
	function onSubmitData() {}
	function onResetData() {}
	const days = createDays(new Date());
	const week: WeekEntity = {
		compensatory: '',
		problem: '',
		announce: '',
		plan: '',
		impression: '',
		w_work: 0,
		w_over: 0,
		w_night: 0,
		w_sum: 0,
		year: 0,
		month: 0,
		day: 0,
		startday: 0
	};

	return (
		<>
			<div className="todoapp">
				<h1>週報入力フォーム</h1>
				<SubmitButton onSubmitData={onSubmitData} />
				<ResetButton onResetData={onResetData} />
				<WeeklyTable days={days}></WeeklyTable>
				<TextBlock week={week}></TextBlock>
			</div>
		</>
	);
}
export default WeeklyReportPage;
