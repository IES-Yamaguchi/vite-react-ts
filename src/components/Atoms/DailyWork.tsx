import { ChangeEvent, useEffect, useState } from 'react';
import { DayEntity } from '../../model/Entity';
import { TableCell, TableRow, TextField } from '@mui/material';
import {
	daysOfWeek,
	numToStringFormatter,
	stringToTimeFormatter,
	timeToNumFormatter
} from '@/shared/Utils';

interface DailyWorkProps {
	day: DayEntity;
}

interface TimeFields {
	dWork: string;
	dOver: string;
	dNight: string;
	dSum: string;
}

function DailyWork(props: DailyWorkProps) {
	const dayOfWeek = daysOfWeek[props.day.dayname];
	const date: string =
		props.day.month + '月' + props.day.day + '日 (' + dayOfWeek + ')';

	const [timeFields, setTimeFields] = useState<TimeFields>({
		dWork: numToStringFormatter(props.day.d_work),
		dOver: numToStringFormatter(props.day.d_over),
		dNight: numToStringFormatter(props.day.d_night),
		dSum: numToStringFormatter(props.day.d_sum)
	});

	// 合計値を計算して表示
	const totalMin =
		stringToTimeFormatter(timeFields.dWork).minutes +
		stringToTimeFormatter(timeFields.dOver).minutes +
		stringToTimeFormatter(timeFields.dNight).minutes;

	const realMin = Math.round(totalMin % 60);

	const totalHours =
		stringToTimeFormatter(timeFields.dWork).hours +
		stringToTimeFormatter(timeFields.dOver).hours +
		stringToTimeFormatter(timeFields.dNight).hours +
		Math.floor(totalMin / 60);

	const totalValue = timeToNumFormatter(totalHours, realMin);

	useEffect(() => {
		// 合計値が変更されたらdSumを更新
		setTimeFields((prevTimeFields) => ({
			...prevTimeFields,
			dSum: numToStringFormatter(totalValue)
		}));
	}, [totalValue]);

	// 入力変更ハンドラ
	const handleInputChange =
		(field: keyof TimeFields) => (event: ChangeEvent<HTMLInputElement>) => {
			setTimeFields({
				...timeFields,
				[field]: event.target.value
			});
		};

	return (
		<TableRow key={props.day.dayname}>
			<TableCell>{date}</TableCell>
			<TableCell>
				<TextField
					type="time"
					inputProps={{ step: 900 }}
					size="small"
					variant="outlined"
					defaultValue={timeFields.dWork}
					onChange={handleInputChange('dWork')}
				/>
			</TableCell>
			<TableCell>
				<TextField
					type="time"
					inputProps={{ step: 900 }}
					size="small"
					variant="outlined"
					defaultValue={timeFields.dOver}
					onChange={handleInputChange('dOver')}
				/>
			</TableCell>
			<TableCell>
				<TextField
					type="time"
					inputProps={{ step: 900 }}
					size="small"
					variant="outlined"
					defaultValue={timeFields.dNight}
					onChange={handleInputChange('dNight')}
				/>
			</TableCell>
			<TableCell>
				<TextField
					type="time"
					size="small"
					variant="outlined"
					value={timeFields.dSum}
					InputProps={{ readOnly: true }}
				/>
			</TableCell>
		</TableRow>
	);
}

export default DailyWork;
