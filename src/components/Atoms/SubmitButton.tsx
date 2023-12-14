import React from 'react';
import { Button } from '@mui/material';

interface SubmitButtonProps {
	onSubmitData: () => void;
}

function SubmitButton({ onSubmitData }: SubmitButtonProps) {
	return (
		<Button type="button" onClick={() => onSubmitData()}>
			<span>データ登録</span>
		</Button>
	);
}

export default SubmitButton;
