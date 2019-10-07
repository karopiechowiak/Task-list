import React from "react";

const TaskListItem = props => {
	return props.tasks.map((task, idx) => (
		<li className="task-list-item" key={idx} id={idx}>
			{task.taskName}
			<button className="task-list-item-button" onClick={props.handleDelete}>
				<i className="fas fa-trash-alt"></i>
			</button>
		</li>
	));
};

export default TaskListItem;
