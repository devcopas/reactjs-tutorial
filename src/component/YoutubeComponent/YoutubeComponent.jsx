import React from "react";
import "./YoutubeComponent.css"

const YoutubeComponent = ({ time, title, description }) => {
	return (
		<div className="youtube-wrapper">
			<div className="img-thumbnail">
				<img src="https://i.ytimg.com/vi/5kHyviqjhCk/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBoRNwJRS3CpNHdlL_XhoHpXQn7GA" alt="" />
				<p className="time">{time}</p>
			</div>
			<p className="title">{title}</p>
			<p className="desc">{description}</p>
		</div>
	)
}

YoutubeComponent.defaultProps = {
	time: "00.00",
	title: "Title Here",
	description: "x ditonton, x hari yang lalu"
}

export default YoutubeComponent;