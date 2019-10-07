import React from "react";
import TaskList from "./TaskList";

class Form extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			tasks: [{ taskName: "Zjeść kotleta" }, { taskName: "Przytulić kota" }],
			currentTask: ""
		};
	}

	handleChange = e => {
		return this.setState({
			currentTask: { taskName: e.target.value }
		});
	};

	handleSubmit = e => {
		e.preventDefault();
		if (this.state.currentTask.taskName) {
			e.target.children[0].value = "";
			const tasks = this.state.tasks;
			tasks.push(this.state.currentTask);
			this.setState({
				tasks: tasks,
				currentTask: { taskName: "" }
			});
		} else {
			alert("O nie! Nie podałeś żadnego zadania! ️🤷🏻‍");
		}
	};

	handleDelete = e => {
		const tasks = this.state.tasks;
		const removedTask = e.target.parentElement.id;
		tasks.splice(removedTask, 1);
		this.setState({
			tasks: tasks
		});
	};

	render(props) {
		return (
			<div className="form-container">
				<form className="form" onSubmit={this.handleSubmit}>
					<input
						className="form-input"
						type="text"
						placeholder="Muszę..."
						onChange={this.handleChange}
					/>
					<button className="form-button" type="submit">
						<i className="fas fa-plus-circle"></i>
					</button>
				</form>
				<TaskList tasks={this.state.tasks} handleDelete={this.handleDelete} />
			</div>
		);
	}
}

export default Form;
