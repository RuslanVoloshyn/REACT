import React, { Component } from 'react';

class Result extends Component {
	render() {
		const { winner } = this.props;
		return (
			<div className="alert alert-info text-center mt-4">
				<h2>Переможець: {winner.emoji}</h2>
				<p>З кількістю голосів: {winner.votes}</p>
			</div>
		);
	}
}

export default Result;
