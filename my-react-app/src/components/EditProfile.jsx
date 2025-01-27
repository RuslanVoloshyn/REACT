import { useState } from 'react';

export default function EditProfile() {
	const [isEditing, setIsEditing] = useState(false);
	const [firstName, setFirstName] = useState('Яна');
	const [lastName, setLastName] = useState('Яківчук');

	return (
		<form onSubmit={e => {
			e.preventDefault();
			setIsEditing(!isEditing);
		}}>
			<label>
				Ім&#39;я:{' '}
				{isEditing ? (
					<input
						value={firstName}
						onChange={e => {
							setFirstName(e.target.value)
						}}
					/>
				) : (
					<b>{firstName}</b>
				)}
			</label>
			<label>
				Прізвище:{' '}
				{isEditing ? (
					<input
						value={lastName}
						onChange={e => {
							setLastName(e.target.value)
						}}
					/>
				) : (
					<b>{lastName}</b>
				)}
			</label>
			<button type="submit">
				{isEditing ? 'Зберегти' : 'Редагувати'} профіль
			</button>
			<p><i>Привіт, {firstName} {lastName}!</i></p>
		</form>
	);
}
