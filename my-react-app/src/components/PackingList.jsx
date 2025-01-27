import * as PropTypes from "prop-types";
import { Component } from "react";

class Item extends Component {
	render() {
		let { name, isPacked } = this.props;
		return (
			<li className="item">
				{name} {isPacked ? '✅' : '❌'}
			</li>
		);
	}
}

Item.propTypes = {
	name: PropTypes.any,
	isPacked: PropTypes.any
}

export default function PackingList() {
	return (
		<section>
			<h2>Список речей для пакування Саллі Райд(Sally Ride)</h2>
			<ul>
				<Item
					isPacked={true}
					name="Космічний костюм"
				/>
				<Item
					isPacked={true}
					name="Шолом із золотим листям"
				/>
				<Item
					isPacked={false}
					name="Фото Тем О'Шонессі(Tam O'Shaughnessy)"
				/>
			</ul>
		</section>
	);
}
