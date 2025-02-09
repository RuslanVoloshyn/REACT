import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PostDetail = () => {
	const { postId } = useParams();
	const [post, setPost] = useState(null);

	useEffect(() => {
		fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
			.then((response) => response.json())
			.then((data) => setPost(data));
	}, [postId]);

	if (!post) return <p>Loading...</p>;

	return (
		<div>
			<h2>{post.title}</h2>
			<p>{post.body}</p>
		</div>
	);
};

export default PostDetail;
