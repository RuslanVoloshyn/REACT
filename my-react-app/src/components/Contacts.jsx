import { Component } from 'react';

class Contacts extends Component {
	constructor(props) {
		super(props);
		this.state = {
			contacts: [], // Список контактів
			showForm: false, // Чи показувати форму
			newContact: {
				name: '',
				username: '',
				phone: '',
			},
		};
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then((response) => response.json())
			.then((data) =>
				this.setState({
					contacts: data.map((user) => ({
						id: user.id,
						name: user.name,
						username: user.username,
						phone: user.phone,
					})),
				})
			);
	}

	deleteContact = (id) => {
		this.setState((prevState) => ({
			contacts: prevState.contacts.filter((contact) => contact.id !== id),
		}));
	};

	toggleForm = () => {
		this.setState((prevState) => ({
			showForm: !prevState.showForm,
			newContact: { name: '', username: '', phone: '' },
		}));
	};

	handleInputChange = (e) => {
		const { name, value } = e.target;
		this.setState((prevState) => ({
			newContact: { ...prevState.newContact, [name]: value },
		}));
	};

	saveContact = (e) => {
		e.preventDefault();
		const { newContact, contacts } = this.state;
		if (newContact.name && newContact.username && newContact.phone) {
			const newId = contacts.length ? contacts[contacts.length - 1].id + 1 : 1;
			this.setState((prevState) => ({
				contacts: [
					...prevState.contacts,
					{ id: newId, ...prevState.newContact },
				],
				showForm: false,
				newContact: { name: '', username: '', phone: '' },
			}));
		}
	};

	render() {
		const { contacts, showForm, newContact } = this.state;

		return (
			<div>
				<table className="table table-dark">
					<thead>
					<tr>
						<th>#</th>
						<th>Ім'я</th>
						<th>Прізвище</th>
						<th>Телефон</th>
						<th>Дії</th>
					</tr>
					</thead>
					<tbody>
					{contacts.map((contact, index) => (
						<tr key={contact.id}>
							<td>{index + 1}</td>
							<td>{contact.name}</td>
							<td>{contact.username}</td>
							<td>{contact.phone}</td>
							<td>
								<button
									className="btn btn-danger btn-sm"
									onClick={() => this.deleteContact(contact.id)}
								>
									Видалити
								</button>
							</td>
						</tr>
					))}
					</tbody>
				</table>

				{!showForm && (
					<button className="btn btn-primary"
					        onClick={this.toggleForm}>
						Додати Контакт
					</button>
				)}

				{showForm && (
					<form className="mt-4" onSubmit={this.saveContact}>
						<div className="mb-3">
							<label htmlFor="name" className="form-label">
								Ім'я
							</label>
							<input
								type="text"
								className="form-control"
								id="name"
								name="name"
								value={newContact.name}
								onChange={this.handleInputChange}
							/>
						</div>
						<div className="mb-3">
							<label htmlFor="username" className="form-label">
								Прізвище
							</label>
							<input
								type="text"
								className="form-control"
								id="username"
								name="username"
								value={newContact.username}
								onChange={this.handleInputChange}
							/>
						</div>
						<div className="mb-3">
							<label htmlFor="phone" className="form-label">
								Телефон
							</label>
							<input
								type="text"
								className="form-control"
								id="phone"
								name="phone"
								value={newContact.phone}
								onChange={this.handleInputChange}
							/>
						</div>
						<button type="submit" className="btn btn-success">
							Зберегти
						</button>
						<button
							type="button"
							className="btn btn-secondary ms-2"
							onClick={this.toggleForm}
						>
							Скасувати
						</button>
					</form>
				)}
			</div>
		);
	}
}

export default Contacts;
