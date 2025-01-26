import { Component } from 'react';

class FormValidation extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			email: '',
			phone: '',
			errors: {
				name: '',
				email: '',
				phone: '',
			},
		};
	}

	validateForm = () => {
		const { name, email, phone } = this.state;
		const errors = {
			name: '',
			email: '',
			phone: '',
		};

		let isValid = true;

		if (!name.trim()) {
			errors.name = 'Ім’я є обов’язковим для заповнення.';
			isValid = false;
		}

		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!email.trim()) {
			errors.email = 'Електронна пошта є обов’язковою для заповнення.';
			isValid = false;
		} else if (!emailRegex.test(email)) {
			errors.email = 'Введіть правильну електронну пошту.';
			isValid = false;
		}

		const phoneRegex = /^\d{12}$/;
		if (!phone.trim()) {
			errors.phone = 'Телефон є обов’язковим для заповнення.';
			isValid = false;
		} else if (!phoneRegex.test(phone)) {
			errors.phone = 'Телефон має містити тільки 12 цифр.';
			isValid = false;
		}

		this.setState({ errors });
		return isValid;
	};

	handleChange = (event) => {
		const { name, value } = event.target;
		this.setState({ [name]: value });
	};

	handleSubmit = (event) => {
		event.preventDefault();

		if (this.validateForm()) {
			alert('Форма успішно відправлена!');
			this.setState({
				name: '',
				email: '',
				phone: '',
				errors: {
					name: '',
					email: '',
					phone: '',
				},
			});
		}
	};

	render() {
		const { name, email, phone, errors } = this.state;

		return (
			<div className="container mt-4">
				<h1>Форма з валідацією</h1>
				<form className="row gx-3 align-items-center" onSubmit={this.handleSubmit}>
					<div className="mb-3 col-auto">
						<label htmlFor="name" className="form-label">
							Ім’я
						</label>
						<input
							type="text"
							className={`form-control ${errors.name ? 'is-invalid' : ''}`}
							id="name"
							name="name"
							value={name}
							onChange={this.handleChange}
						/>
						{errors.name && <div
							className="invalid-feedback">{errors.name}</div>}
					</div>
					<div className="mb-3 col-auto">
						<label htmlFor="email" className="form-label">
							Електронна пошта
						</label>

							<input
								type="email"
								className={`form-control  ${errors.email ? 'is-invalid' : ''}`}
								id="email"
								name="email"
								value={email}
								onChange={this.handleChange}
							/>
						{errors.email && <div
							className="invalid-feedback">{errors.email}</div>}
					</div>
					<div className="mb-3 col-auto">
						<label htmlFor="phone" className="form-label">
							Телефон
						</label>
						<input
							type="text"
							className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
							id="phone"
							name="phone"
							value={phone}
							onChange={this.handleChange}
						/>
						{errors.phone && <div
							className="invalid-feedback">{errors.phone}</div>}
					</div>

					<div className="mt-3 col-auto">
						<button type="submit" className="btn btn-primary">
							Надіслати
						</button>
					</div>
				</form>
			</div>
		);
	}
}

export default FormValidation;
