import React, { Component } from 'react';

class EmojiList extends Component {
	render() {
		const { emojis, onVote } = this.props;
		return (
			<div className="row">
				{emojis.map((emoji) => (
					<div key={emoji.id} className="col-3 text-center">
						<span style={{ fontSize: '2rem' }}>{emoji.emoji}</span>
						<p>Votes: {emoji.votes}</p>
						<button
							className="btn btn-success"
							onClick={() => onVote(emoji.id)}
						>
							Vote
						</button>
					</div>
				))}
			</div>
		);
	}
}

export default EmojiList;
