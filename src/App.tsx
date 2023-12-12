// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
import './App.css';
// import { useState } from 'react';
import Todo from './components/Todo';
import { Task } from './model/TodoProps';
import Form from './components/Form';
import { FilterButtonStatus } from './model/FilterButtonStatus';
import FilterButton from './components/FilterButton';
import { useState } from 'react';
import { nanoid } from 'nanoid';

const buttonSts: FilterButtonStatus[] = [
	{ name: 'all', isPressed: true },
	{ name: 'active', isPressed: false },
	{ name: 'completed', isPressed: false }
];

const DATA: Task[] = [
	{ id: 'todo-0', name: 'Eat', completed: true },
	{ id: 'todo-1', name: 'Sleep', completed: false },
	{ id: 'todo-2', name: 'Work', completed: false }
];

function App() {
	const [tasks, setTasks] = useState(DATA);

	function toggleTaskCompleted(id: string) {
		const updatedTasks = tasks.map((task) => {
			if (id === task.id) {
				return { ...task, completed: !task.completed };
			}
			return task;
		});
		setTasks(updatedTasks);
	}

	function deleteTask(name: string) {
		const updatedTasks = tasks.filter((task) => name !== task.id);
		setTasks(updatedTasks);
	}

	const taskList = tasks.map((task) => {
		return (
			<Todo
				key={task.id}
				task={task}
				toggleTaskCompleted={toggleTaskCompleted}
				deleteTask={deleteTask}
			/>
		);
	});

	function selectedChange(name: string) {
		buttonSts
			.filter((sts) => sts.name === name)
			.forEach((sts) => (sts.isPressed = !sts.isPressed));
	}

	const filterButtonList = buttonSts.map((sts, id) => {
		return <FilterButton key={id} status={sts} onClick={selectedChange} />;
	});

	const tasksNotComp = tasks.filter((task) => !task.completed);
	const tasksNoun = tasksNotComp.length !== 1 ? ' tasks' : ' task';
	const headingText = tasksNotComp.length + tasksNoun + ' remaining';

	function addTask(name: string) {
		const newTask: Task = {
			id: 'todo-' + nanoid(),
			name: name,
			completed: false
		};
		setTasks([...tasks, newTask]);
	}

	return (
		<div className="todoapp stack-large">
			<h1>TodoMatic</h1>
			<Form addTask={addTask} />
			<div className="filters btn-group stack-exception">
				{filterButtonList}
			</div>
			<h2 id="list-heading">{headingText}</h2>
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
