import { useNavigate } from "react-router-dom";

const Login = () => {
	const navigate = useNavigate();

	const handleLogin = () => {
		localStorage.setItem("token", "test-token");
		navigate("/profile");
	};

	return (
		<div>
			<h2>Login</h2>
			<button className="btn btn-outline-secondary" onClick={handleLogin}>Login</button>
		</div>
	);
};

export default Login;
