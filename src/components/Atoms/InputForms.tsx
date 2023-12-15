import React from 'react';
import { TextField } from '@mui/material';

interface InputFormsProps {
	id: number;
	label: string;
	value: string;
}

function InputForms(week: InputFormsProps) {
	return (
		<TextField
			className="w-100"
			multiline
			key={week.id}
			minRows={2}
			maxRows={3}
			label={week.label}
			placeholder={week.label}
			defaultValue={week.value}
		/>
	);
}

export default InputForms;
