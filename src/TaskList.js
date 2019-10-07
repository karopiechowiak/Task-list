import React from "react";
import TaskListItem from "./TaskListItem";

const TaskList = props => {
	const { tasks, handleDelete } = props;
	console.log(tasks.length);

	return (
		<ul className={tasks.length && "task-list"}>
			<TaskListItem tasks={tasks} handleDelete={handleDelete} />
		</ul>
	);
};

export default TaskList;
