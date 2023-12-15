import React from 'react';
import { WeekEntity } from '../../model/Entity';
import InputForms from '../Atoms/InputForms';
import { WeekInputEnum } from '../../model/Enum';

interface TextBlockProps {
	week: WeekEntity;
}
interface DisplayBlock {
	[key: string]: string;
	compensatory: string;
	problem: string;
	announce: string;
	plan: string;
	impression: string;
}

function TextBlock(props: TextBlockProps) {
	const displayBlock: DisplayBlock = {
		compensatory: props.week.compensatory,
		problem: props.week.problem,
		announce: props.week.announce,
		plan: props.week.plan,
		impression: props.week.impression
	};

	const KeyValue = Object.keys(displayBlock).map((key: string) => {
		const value = displayBlock[key];
		return { key, value };
	});
	const textList = KeyValue.map(({ key, value }, index) => {
		const disp = WeekInputEnum[key];
		return (
			<div key={index} className="pad-8">
				<InputForms key={index} id={index} label={disp} value={value} />
			</div>
		);
	});

	return <>{textList}</>;
}

export default TextBlock;
