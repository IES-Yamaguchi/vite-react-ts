import React from 'react';
import { DayEntity } from '../../model/Entity';
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableRow
} from '@mui/material';
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
						<TableCell className="center">今週の勤務</TableCell>
						<TableCell className="center">時間内</TableCell>
						<TableCell className="center">時間外</TableCell>
						<TableCell className="center">深夜・休出</TableCell>
						<TableCell className="center">合計</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>{dayList}</TableBody>
			</Table>
		</>
	);
}

export default WeeklyTable;
