import React from 'react';
import { DayEntity } from '../../model/Entity';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
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
			<Table>
				<TableHead>
					<TableRow>
						<TableCell>今週の勤務</TableCell>
						<TableCell>時間内</TableCell>
						<TableCell>時間外</TableCell>
						<TableCell>深夜・休出</TableCell>
						<TableCell>合計</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>{dayList}</TableBody>
			</Table>
		</>
	);
}

export default WeeklyTable;
