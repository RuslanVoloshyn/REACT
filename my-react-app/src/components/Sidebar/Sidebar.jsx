import React, { Component } from 'react';

class Sidebar extends Component {
	render() {
		return (
			<aside className="bg-dark p-3" style={{ minHeight: '100vh' }}>
				<ul className="nav flex-column">
					<li className="nav-item">
						<a className="nav-link" href="#">Головна</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">Про нас</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">Контакти</a>
					</li>
				</ul>
			</aside>
		);
	}
}

export default Sidebar;
