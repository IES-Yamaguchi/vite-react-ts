import React from 'react';
import { DayEntity } from '../../model/Entity';

interface DailyWorkProps {
	day: DayEntity;
}
const daysOfWeek = ['日', '月', '火', '水', '木', '金', '土'];

function DailyWork(props: DailyWorkProps) {
	const dayOfWeek = daysOfWeek[props.day.dayname];
	const date: string =
		props.day.month + '月' + props.day.day + '日 (' + dayOfWeek + ')';

	return (
		<tr key={props.day.dayname}>
			<td>{date}</td>
			<td>{props.day.d_work}</td>
			<td>{props.day.d_over}</td>
			<td>{props.day.d_night}</td>
			<td>{props.day.d_sum}</td>
		</tr>
	);
}

export default DailyWork;
