import { useState } from 'react';

export default function Contact() {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		message: ''
	});
	const [status, setStatus] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		setStatus('sending');

		setTimeout(() => {
			setStatus('sent');
			setFormData({ name: '', email: '', message: '' });
		}, 1500);
	};

	return (
		<section id="contact" className="py-5 bg-dark ">
			<div className="container">
				<h2 className="text-center mb-5">Contact Me</h2>
				<div className="row justify-content-center">
					<div className="col-md-6">
						<form onSubmit={handleSubmit}>
							<div className="mb-3">
								<label htmlFor="name" className="form-label">Name</label>
								<input
									type="text"
									className="form-control"
									id="name"
									value={formData.name}
									onChange={(e) => setFormData({
										...formData,
										name: e.target.value
									})}
									required
								/>
							</div>
							<div className="mb-3">
								<label htmlFor="email" className="form-label">Email</label>
								<input
									type="email"
									className="form-control"
									id="email"
									value={formData.email}
									onChange={(e) => setFormData({
										...formData,
										email: e.target.value
									})}
									required
								/>
							</div>
							<div className="mb-3">
								<label htmlFor="message" className="form-label">Message</label>
								<textarea
									className="form-control"
									id="message"
									rows="5"
									value={formData.message}
									onChange={(e) => setFormData({
										...formData,
										message: e.target.value
									})}
									required
								></textarea>
							</div>
							<button
								type="submit"
								className="btn btn-primary w-100"
								disabled={status === 'sending'}
							>
								{status === 'sending' ? (
									<>
										<span className="spinner-border spinner-border-sm me-2"></span>
										Sending...
									</>
								) : 'Send Message'}
							</button>
							{status === 'sent' && (
								<div className="alert alert-success mt-3">
									Message sent successfully!
								</div>
							)}
						</form>
					</div>
				</div>
			</div>
		</section>
	);
}
