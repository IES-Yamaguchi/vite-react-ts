// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
import './App.css';
// import { useState } from 'react';
import Todo from './components/Todo';
import { Task } from './main';
import Form from './components/Form';
import FilterButton, { ButtonSts } from './components/FilterButton';

const buttonSts: ButtonSts[] = [
	{ name: 'all', isPressed: true },
	{ name: 'active', isPressed: false },
	{ name: 'completed', isPressed: false }
];

function App({ tasks }: { tasks: Task[] }) {
	const taskList = tasks.map((task, id) => {
		return <Todo key={id} task={task} />;
	});

	const filterButtonList = buttonSts.map((sts, id) => {
		return <FilterButton key={id} sts={sts} />;
	});

	return (
		<div className="todoapp stack-large">
			<h1>TodoMatic</h1>
			<Form />
			<div className="filters btn-group stack-exception">
				{filterButtonList}
			</div>
			<h2 id="list-heading">{tasks.length} tasks remaining</h2>
			<ul
				role="list"
				className="todo-list stack-large stack-exception"
				aria-labelledby="list-heading">
				{taskList}
			</ul>
		</div>
	);
}

export default App;
