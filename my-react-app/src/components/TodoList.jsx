const baseUrl = 'https://i.imgur.com/';
const person = {
	name: 'Грегоріо І. Зара (Gregorio Y. Zara)',
	imageId: '7vQD0fP',
	imageSize: 's',
	theme: {
		backgroundColor: 'black',
		color: 'pink'
	}
};

export default function TodoList() {
	return (
		<div style={person.theme}>
			<h1>Задачі {person.name}</h1>
			<img
				className="avatar"
				src={baseUrl + person.imageId + person.imageSize + '.jpg'}
				alt={person.name}
			/>
			<ul>
				<li>Покращити відеотелефон</li>
				<li>Підготувати лекції з авіаційних технологій</li>
				<li>Працювати над двигуном на спиртовому паливі</li>
			</ul>
		</div>
	);
}
