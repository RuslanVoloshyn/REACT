import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./../pages/Home";
import Blog from "./../pages/Blog";
import PostDetail from "./../pages/PostDetail";
import Login from "./../pages/Login";
import Profile from "./../pages/Profile";
import ProtectedRoute from "./../components/ProtectedRoute";
import NavigationBar from "./../components/NavigationBar";

const AppRouter = () => {
	return (
		<Router>
			<NavigationBar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/blog" element={<Blog />} />
				<Route path="/blog/:postId" element={<PostDetail />} />
				<Route path="/login" element={<Login />} />
				<Route
					path="/profile"
					element={
						<ProtectedRoute>
							<Profile />
						</ProtectedRoute>
					}
				/>
			</Routes>
		</Router>
	);
};

export default AppRouter;
