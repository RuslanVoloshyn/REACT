import { NavLink } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";

const NavigationBar = () => {
	return (
		<Navbar bg="dark" variant="dark" expand="lg">
			<Container>
				<Navbar.Brand href="/">MyApp</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						<NavLink className="nav-link" to="/">Home</NavLink>
						<NavLink className="nav-link" to="/blog">Blog</NavLink>
						<NavLink className="nav-link" to="/profile">Profile</NavLink>
						<NavLink className="nav-link" to="/login">Login</NavLink>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default NavigationBar;
