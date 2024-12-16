export default function Header() {
	return (<header>
			<nav className="navbar navbar-expand-lg mb-5">
				<div className="container-fluid">
					<a className="navbar-brand text-light link-opacity-75-hover"
					   href="#">
						<svg xmlns="http://www.w3.org/2000/svg" width="16"
						     height="16" fill="currentColor"
						     className="bi bi-bootstrap" viewBox="0 0 16 16">
							<path
								d="M5.062 12h3.475c1.804 0 2.888-.908 2.888-2.396 0-1.102-.761-1.916-1.904-2.034v-.1c.832-.14 1.482-.93 1.482-1.816 0-1.3-.955-2.11-2.542-2.11H5.062zm1.313-4.875V4.658h1.78c.973 0 1.542.457 1.542 1.237 0 .802-.604 1.23-1.764 1.23zm0 3.762V8.162h1.822c1.236 0 1.887.463 1.887 1.348 0 .896-.627 1.377-1.811 1.377z"/>
							<path
								d="M0 4a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4zm4-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V4a3 3 0 0 0-3-3z"/>
						</svg>
					</a>
					<button className="navbar-toggler" type="button"
					        data-bs-toggle="collapse"
					        data-bs-target="#navbarSupportedContent"
					        aria-controls="navbarSupportedContent"
					        aria-expanded="false"
					        aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse"
					     id="navbarSupportedContent">
						<ul className="navbar-nav me-auto mb-2 mb-lg-0">
							<li className="nav-item ">
								<a className="nav-link active text-light link-opacity-75-hover"
								   aria-current="page"
								   href="./../pages/About.jsx">About</a>
							</li>
							<li className="nav-item">
								<a className="nav-link text-light link-opacity-75-hover"
								   href="./../pages/Skills.jsx">Skills</a>
							</li>
							<li className="nav-item">
								<a className="nav-link text-light"
								   href="./../pages/Projects.jsx">Projects</a>
							</li>
							<li className="nav-item">
								<a className="nav-link text-light"
								   href="./../pages/Contact.jsx">Contact</a>
							</li>

						</ul>
						<form className="d-flex" role="search">
							<label>
								<input className="form-control me-2"
								       type="search"
								       placeholder="Search"
								       aria-label="Search"/>
							</label>
							<button className="btn btn-outline-success"
							        type="submit">Search
							</button>
						</form>
					</div>
				</div>
			</nav>
		</header>
	);
};
