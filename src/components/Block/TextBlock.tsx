import React from 'react';
import { WeekEntity } from '../../model/Entity';

interface TextBlockProps {
	week: WeekEntity;
}

function TextBlock(props: TextBlockProps) {
	const KeyValue = Object.keys(props.week).map((key) => {
		const value = props.week[key];
		return { key, value };
	});
	const textList = KeyValue.map(({ key, value }) => {
		return { value, key };
		// return <inputForms key={keyvalue.key} data={keyvalue.value} />;
	});
	console.log(textList);

	return <></>;
}

export default TextBlock;
