import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

const Blog = () => {
	const [posts, setPosts] = useState([]);
	const [searchParams, setSearchParams] = useSearchParams();
	const limit = searchParams.get("_limit") || 5;

	useEffect(() => {
		fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`)
			.then((response) => response.json())
			.then((data) => setPosts(data));
	}, [limit]);

	const handleLimitChange = (event) => {
		setSearchParams({ _limit: event.target.value });
	};

	return (
		<div>
			<h2>Blog</h2>
			<input type="number" value={limit} onChange={handleLimitChange} />
			<ul style={{ listStylePosition: "inside" }}>
				{posts.map((post) => (
					<li key={post.id}>
						<Link to={`/blog/${post.id}`}>{post.title}</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Blog;
