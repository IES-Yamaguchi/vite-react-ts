// import React from "react";

export interface TodoProps {
	task: Task;
	toggleTaskCompleted: (id: string) => void;
	deleteTask: (id: string) => void;
}

export interface Task {
	id: string;
	name: string;
	completed: boolean;
}
