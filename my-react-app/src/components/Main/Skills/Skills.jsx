import { useState } from 'react';

export default function Skills() {

	const skills = [
		{ name: "HTML", level: 90, color: "#E44D26" },
		{ name: "CSS", level: 85, color: "#264DE4" },
		{ name: "Bootstrap", level: 85, color: "#7952B3" },
		{ name: "GitHub", level: 80, color: "#4378c3" },
		{ name: "SCSS", level: 80, color: "#CD6799" },
		{ name: "JavaScript", level: 75, color: "#F7DF1E" },
		{ name: "React", level: 10, color: "#61DAFB" }
	];

	const [isDarkMode, setIsDarkMode] = useState(false);

	return (
		<section id="skills" className={`py-5 ${isDarkMode ? 'bg-dark text-light' : 'bg-light'}`}>
			<div className="container">
				<div className="d-flex justify-content-between align-items-center mb-5">
					<h2 className="text-center mb-0">My Skills</h2>
					<button
						className={`btn ${isDarkMode ? 'btn-light' : 'btn-dark'}`}
						onClick={() => setIsDarkMode(!isDarkMode)}
					>
						{isDarkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
					</button>
				</div>

				<div className="row justify-content-center">
					<div className="col-md-8">
						{skills.map((skill, index) => (
							<div
								key={index}
								className="mb-4"
								data-aos="fade-right"
								data-aos-delay={index * 100}
							>
								<div className="d-flex justify-content-between mb-1">
									<span className="fw-bold">{skill.name}</span>
									<span>{skill.level}%</span>
								</div>
								<div className="progress" style={{ height: '25px', backgroundColor: isDarkMode ? '#2d3436' : '#e9ecef' }}>
									<div
										className="progress-bar progress-bar-striped progress-bar-animated"
										role="progressbar"
										style={{
											width: `${skill.level}%`,
											backgroundColor: skill.color,
											transition: 'width 1.5s ease-in-out'
										}}
										aria-valuenow={skill.level}
										aria-valuemin="0"
										aria-valuemax="100"
									>
										{skill.name}
									</div>
								</div>
							</div>
						))}
					</div>
				</div>

				<div className="row mt-5">
					<div className="col-12 text-center">
						<p className="lead mb-4">
							Постійно вдосконалюю свої навички та вивчаю нові технології
						</p>
						<button className="btn btn-primary me-2">
							Переглянути проекти
						</button>
						<button className="btn btn-outline-primary">
							Завантажити резюме
						</button>
					</div>
				</div>
			</div>
		</section>
	);
}
