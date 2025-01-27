import * as PropTypes from "prop-types";
import { Component } from "react";

class Card extends Component {
	render() {
		let { children } = this.props;
		return (
			<div className="card">
				<div className="card-content">
					{children}
				</div>
			</div>
		);
	}
}

Card.propTypes = { children: PropTypes.any }

export default function Profile() {
	return (
		<div>
			<Card>
				<h1>Фото</h1>
				<img
					className="avatar"
					src="https://i.imgur.com/OKS67lhm.jpg"
					alt="Аклілу Лемма (Aklilu Lemma)"
					width={100}
					height={100}
				/>
			</Card>
			<Card>
				<h1>Про</h1>
				<p>Аклілу Лемма (Aklilu Lemma) був видатним ефіопським вченим, який відкрив природний спосіб лікування шистосомозу.</p>
			</Card>
		</div>
	);
}
