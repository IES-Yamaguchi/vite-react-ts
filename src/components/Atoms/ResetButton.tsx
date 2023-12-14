import React from 'react';
import Button from 'react-bootstrap/Button';

interface ResetButtonProps {
	onResetData: () => void;
}

function ResetButton({ onResetData }: ResetButtonProps) {
	return (
		<Button
			type="button"
			className="btn toggle-btn"
			onClick={() => onResetData()}>
			<span>リセット</span>
		</Button>
	);
}

export default ResetButton;
