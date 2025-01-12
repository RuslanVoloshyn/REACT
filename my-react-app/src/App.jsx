import React, { Component } from 'react';
import TodoList from './components/TodoList';

class App extends Component {
	render() {
		return (
			<div className="container pt-5">
				<h1 className="text-center">Todo List</h1>
				<TodoList/>
			</div>
		);
	}
}

export default App
