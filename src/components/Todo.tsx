import { TodoProps } from '../model/TodoProps';
import React from 'react';

export default function Todo({
	task,
	toggleTaskCompleted,
	deleteTask
}: TodoProps) {
	return (
		<li className="todo stack-small">
			<div className="c-cb">
				<input
					id={task.id}
					type="checkbox"
					defaultChecked={task.completed}
					onChange={() => toggleTaskCompleted(task.id)}
				/>
				<label className="todo-label" htmlFor="todo-0">
					{task.name}
				</label>
			</div>
			<div className="btn-group">
				<button type="button" className="btn">
					Edit <span className="visually-hidden">{task.name}</span>
				</button>
				<button
					type="button"
					className="btn btn__danger"
					onClick={() => deleteTask(task.id)}>
					Delete <span className="visually-hidden">{task.name}</span>
				</button>
			</div>
		</li>
	);
}
