import { useState } from 'react';

export default function RequestTracker() {
	const [pending, setPending] = useState(0);
	const [completed, setCompleted] = useState(0);

	async function handleClick() {
		setPending(p => p + 1);
		await delay(3000);
		setPending(p => p - 1);
		setCompleted(c => c + 1);
	}

	return (
		<>
			<h3>
				Очікування: {pending}
			</h3>
			<h3>
				Завершено: {completed}
			</h3>
			<button onClick={handleClick}>
				Придбати
			</button>
		</>
	);
}

function delay(ms) {
	return new Promise(resolve => {
		setTimeout(resolve, ms);
	});
}
