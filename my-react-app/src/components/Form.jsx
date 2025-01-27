import { useState } from 'react';

export default function Form() {
	const [showForm, setShowForm] = useState(true);
	const [message, setMessage] = useState('');

	function handleSubmit(e) {
		e.preventDefault();
		setShowForm(false);
		sendMessage(message);
	}

	if (!showForm) {
		return (
			<>
				<h3>Thanks for using our services!</h3>
				<button onClick={() => {
					setMessage('');
					setShowForm(true);
				}}>
					Open chat
				</button>
			</>
		);
	}

	return (
		<form onSubmit={handleSubmit}>
      <textarea
	      placeholder="Message"
	      value={message}
	      onChange={e => setMessage(e.target.value)}
      />
			<button type="submit" disabled={message === ''}>
				Send
			</button>
		</form>
	);
}

function sendMessage(message) {
	console.log('Sending message: ' + message);
}
