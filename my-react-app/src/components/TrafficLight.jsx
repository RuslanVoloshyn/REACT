import { useState } from 'react';

export default function TrafficLight() {
	const [walk, setWalk] = useState(true);

	function handleClick() {
		setWalk(!walk);
		alert(walk ? 'Далі буде Стійте' : 'Далі буде Йдіть');
	}

	return (
		<>
			<button onClick={handleClick}>
				Змінити на {walk ? 'Стійте' : 'Йдіть'}
			</button>
			<h2 style={{
				color: walk ? 'darkgreen' : 'darkred'
			}}>
				{walk ? 'Йдіть' : 'Стійте'}
			</h2>
		</>
	);
}
