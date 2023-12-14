import React from 'react';
import { DayEntity } from '../../model/Entity';
import Table from 'react-bootstrap/Table';
import DailyWork from '../Atoms/DailyWork';

interface WeeklyTableProps {
	days: DayEntity[];
}

function WeeklyTable(props: WeeklyTableProps) {
	const dayList = props.days.map((day) => {
		return <DailyWork key={day.dayname} day={day} />;
	});

	return (
		<>
			<Table hover striped bordered>
				<thead>
					<th>今週の勤務</th>
					<th>時間内</th>
					<th>時間外</th>
					<th>深夜・休出</th>
					<th>合計</th>
				</thead>
				<tbody>{dayList}</tbody>
			</Table>
		</>
	);
}

export default WeeklyTable;
