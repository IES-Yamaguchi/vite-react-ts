import React from 'react';
import Button from 'react-bootstrap/Button'

interface SubmitButtonProps {
	onSubmitData: () => void;
}

function SubmitButton({ onSubmitData }: SubmitButtonProps) {
	return (
		<Button
			type="button"
			className="btn toggle-btn"
			onClick={() => onSubmitData()}>
			<span>データ登録</span>
		</Button>
	);
}

export default SubmitButton;
