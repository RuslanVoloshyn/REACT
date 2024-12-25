import Photos from './../../../assets/pictures/Projek_1.png'
import Todolist from './../../../assets/pictures/Todo.png'
import Weather from './../../../assets/pictures/Weather.jpg'

export default function Projects() {
	const projects = [{
		title: "Weather",
		image: Weather,
		description: "The project is implemented without the use of frameworks, focusing on teaching basic JavaScript capabilities for retrieving data via API and displaying it in the DOM.",
		technologies: ["HTML", "JavaScript", 'Bootstrap 5.3'],
		link: "#"
	}, {
		title: "TodoList",
		image: Todolist,
		description: "An interactive task list that is easy to extend, such" +
			" as adding sorting, categories, or task priorities. This project is great for practicing DOM, events, and LocalStorage in JavaScript.",
		technologies: ["HTML", "JavaScript", 'Bootstrap 5.3'],
		link: "#"
	}, {
		title: "Portfolio Website",
		image: Photos,
		description: "A responsive portfolio website using modern web technologies",
		technologies: ["HTML", "SCSS", "JavaScript", 'Bootstrap 5.3'],
		link: "https://ruslanvoloshyn.github.io/Hlegal"
	}];

	return (<section id="projects" className="py-5">
		<div className="container">
			<h2 className="text-center mb-5">My Projects</h2>
			<div className="row">
				{projects.map((project, index) => (
					<div key={index} className="col-md-4 mb-4">
						<div className="card h-100 bg-secondary ">
							<img
								src={project.image}
								className="card-img-top"
								alt={project.title}
							/>
							<div className="card-body">
								<h5 className="card-title">{project.title}</h5>
								<p className="card-text">{project.description}</p>
								<div className="mb-3">
									{project.technologies.map((tech, i) => (
										<span
											key={i}
											className="badge bg-primary me-1"
										>
                        {tech}
                      </span>))}
								</div>
								<a href={project.link}
								   className="btn btn-primary">
									View Project
								</a>
							</div>
						</div>
					</div>))}
			</div>
		</div>
	</section>);
}
