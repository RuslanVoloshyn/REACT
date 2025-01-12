import React, { Component } from 'react';

class TodoList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			todos: [
				{ id: 1, text: 'Вивчити React', completed: false },
				{ id: 2, text: 'Підключити Bootstrap', completed: true },
			],
			newTodo: '',
		};
	}

	toggleTodo = (id) => {
		this.setState((prevState) => ({
			todos: prevState.todos.map((todo) =>
				todo.id === id ? { ...todo, completed: !todo.completed } : todo
			),
		}));
	};

	addTodo = (e) => {
		e.preventDefault();
		if (this.state.newTodo.trim() === '') return;

		const newTodo = {
			id: Date.now(),
			text: this.state.newTodo,
			completed: false,
		};

		this.setState((prevState) => ({
			todos: [...prevState.todos, newTodo],
			newTodo: '',
		}));
	};

	handleInputChange = (e) => {
		this.setState({ newTodo: e.target.value });
	};

	render() {
		return (
			<div>
				<ul className="list-group mb-4">
					{this.state.todos.map((todo) => (
						<li
							key={todo.id}
							className={`list-group-item d-flex justify-content-between align-items-center ${
								todo.completed ? 'list-group-item-success' : ''
							}`}
							onClick={() => this.toggleTodo(todo.id)}
						>
							{todo.text}
							<span
								className={`badge ${
									todo.completed ? 'bg-success' : 'bg-secondary'
								}`}
							>
                {todo.completed ? 'Зроблено' : 'Не зроблено'}
              </span>
						</li>
					))}
				</ul>

				<form onSubmit={this.addTodo}>
					<div className="input-group">
						<input
							type="text"
							className="form-control"
							placeholder="Додати нову справу"
							value={this.state.newTodo}
							onChange={this.handleInputChange}
						/>
						<button type="submit" className="btn btn-primary">
							Додати
						</button>
					</div>
				</form>
			</div>
		);
	}
}

export default TodoList;
