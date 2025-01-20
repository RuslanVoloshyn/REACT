import { Component } from 'react';
import './App.css'
import Contacts from './../src/components/Contacts.jsx';

class App extends Component {
	render() {
		return (
			<div className="container mt-5">
				<h1 className="text-center">Список Контактів</h1>
				<Contacts/>
			</div>
		);
	}
}

export default App
