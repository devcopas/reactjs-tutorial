import React from "react";


const FormPost = ({ state, handleFormChange, handleSubmit }) => {
	const { title, body, imageUrl } = state;

	return (
		<div className="form-add-post">
			<form onSubmit={handleSubmit}>
				<label htmlFor="title">Title</label>
				<input
					type="text"
					name="title"
					placeholder="add title here"
					value={title}
					onChange={handleFormChange} />
				<label htmlFor="imageUrl">Image URL</label>
				<input
					type="text"
					name="imageUrl"
					placeholder="add image url here"
					value={imageUrl}
					onChange={handleFormChange} />
				<label htmlFor="body">Blog Content</label>
				<textarea
					name="body"
					id="body"
					cols="30"
					rows="10"
					placeholder="add content here"
					value={body}
					onChange={handleFormChange} ></textarea>
				<button
					className="btn-submit">Save</button>
			</form>
		</div>
	)
}


export default FormPost;