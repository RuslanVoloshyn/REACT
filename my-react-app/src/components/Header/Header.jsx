export default function Header() {
	return (<header className="pb-3">
			<nav
				className="navbar navbar-expand-lg navbar-dark fixed-top">
				<div className="container">
					<a className="navbar-brand" href="#">Ruslan Voloshyn</a>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarNav"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarNav">
						<ul className="navbar-nav ms-auto">
							<li className="nav-item">
								<a className="nav-link" href="#about">About</a>
							</li>
							<li className="nav-item">
								<a className="nav-link"
								   href="#skills">Skills</a>
							</li>
							<li className="nav-item">
								<a className="nav-link"
								   href="#projects">Projects</a>
							</li>
							<li className="nav-item">
								<a className="nav-link"
								   href="#contact">Contact</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</header>
	);
};
