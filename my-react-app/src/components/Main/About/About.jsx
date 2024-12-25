import profilePhoto from './../../../assets/pictures/My_photo.png'

export default function About() {
	return (

		<section id="about" className="py-5">
			<div className="container">
				<h2 className="text-center mb-4">About Me</h2>
				<div className="row align-items-center">
					<div className="col-md-4 mb-4 mb-md-0">
						<img
							src={profilePhoto}
							alt="Profile"
							className="img-fluid rounded-circle"
						/>
					</div>
					<div className="col-md-8">
						<h3>Ruslan Voloshyn</h3>
						<h5 className="text-muted">Frontend Developer</h5>
						<p className="lead">
							I am a dedicated and passionate frontend developer
							currently completing a professional course. My
							skills include creating responsive layouts,
							implementing modern web designs, and utilizing tools
							and libraries like JavaScript and Bootstrap to
							deliver user-friendly web applications. As a junior
							frontend developer, I have mastered the following:
						</p>
						<ul>
							<li>Creating semantic and adaptive web pages using
								HTML/CSS.
							</li>
							<li>Working with JavaScript for DOM manipulation,
								event handling, and basic OOP principles.
							</li>
							<li>Building responsive layouts with Flexbox, Grid,
								and Bootstrap components.
							</li>
							<li>Interacting with APIs using fetch and handling
								JSON data.
							</li>
							<li>Version control with Git and debugging with
								browser DevTools.
							</li>
							<li>Applying basic UX/UI design principles to create
								user-friendly interfaces.
							</li>
							<li>Ensuring cross-browser compatibility and
								responsive design.
							</li>
						</ul>
						<div className="mt-3">
							<button className="btn btn-primary me-2">Download
								CV
							</button>
							<button className="btn btn-outline-primary">Contact
								Me
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
