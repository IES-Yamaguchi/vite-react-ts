import React from 'react';

export interface ButtonSts {
	name: string;
	isPressed: boolean;
}

function FilterButton({ sts }: { sts: ButtonSts }) {
	return (
		<button
			type="button"
			className="btn toggle-btn"
			aria-pressed={sts.isPressed}>
			<span className="visually-hidden">Show </span>
			<span>{sts.name}</span>
			<span className="visually-hidden"> tasks</span>
		</button>
	);
}

export default FilterButton;
