// import React from "react";

export interface FilterButtonProps {
	status: FilterButtonStatus;
	onClick: (name: string) => void;
}

export interface FilterButtonStatus {
	name: string;
	isPressed: boolean;
}
