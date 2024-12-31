import './App.css'
import React, { Component } from 'react';
import EmojiList from './../src/components/EmojiList/EmojiList.jsx';
import Result from './../src/components/Result/Result.jsx';

class App extends Component {
	constructor() {
		super();
		this.state = {
			emojis: [
				{ id: 1, emoji: '😀', votes: 0 },
				{ id: 2, emoji: '😂', votes: 0 },
				{ id: 3, emoji: '😍', votes: 0 },
				{ id: 4, emoji: '🤔', votes: 0 },
			],
			winner: null,
		};
	}

	handleVote = (id) => {
		this.setState((prevState) => ({
			emojis: prevState.emojis.map((emoji) =>
				emoji.id === id ? { ...emoji, votes: emoji.votes + 1 } : emoji
			),
		}));
	};

	showResults = () => {
		const winner = this.state.emojis.reduce((max, emoji) =>
			emoji.votes > max.votes ? emoji : max
		);
		this.setState({ winner });
	};

	render() {
		return (
			<div className="container my-4">
				<h1 className="text-center mb-4">Голосувалка за найкращий смайлик</h1>
				<EmojiList emojis={this.state.emojis} onVote={this.handleVote} />
				<button
					className="btn btn-primary mt-4"
					onClick={this.showResults}
				>
					Show Results
				</button>
				{this.state.winner && <Result winner={this.state.winner} />}
			</div>
		);
	}
}

export default App;
