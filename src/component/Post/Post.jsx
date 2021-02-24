import React from "react";

const Post = ({ data, remove }) => {

	return (
		<div className="post">
			<div className="img-thumb">
				<img src={data.imageUrl} alt="dummy image" />
			</div>
			<div className="content">
				<p className="title">{data.title}</p>
				<p className="desc">{data.body}</p>
				<button type="button" className="delete-btn" onClick={() => remove(data.id)} >Delete</button>
			</div>
		</div >
	)
}

export default Post;