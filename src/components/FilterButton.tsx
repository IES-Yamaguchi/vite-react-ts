import React from 'react';
import { FilterButtonProps } from '../model/FilterButtonStatus';

function FilterButton({ status, onClick }: FilterButtonProps) {
	return (
		<button
			type="button"
			className="btn toggle-btn"
			aria-pressed={status.isPressed}
			onClick={() => onClick(status.name)}>
			<span className="visually-hidden">Show </span>
			<span>{status.name}</span>
			<span className="visually-hidden"> tasks</span>
		</button>
	);
}

export default FilterButton;
