import React from "react";

const Post = ({ data, remove, update, goDetail }) => {

	return (
		<div className="post">
			<div className="img-thumb">
				<img src={data.imageUrl} alt="dummy image" />
			</div>
			<div className="content">
				<p className="title" onClick={() => goDetail(data.id)} >{data.title}</p>
				<p className="desc">{data.body}</p>
				<button type="button" className="delete-btn" onClick={() => remove(data.id)} >Delete</button>
				<button type="button" className="update-btn" onClick={((e) => update(e, data))} >Edit</button>
			</div>
		</div >
	)
}

export default Post;