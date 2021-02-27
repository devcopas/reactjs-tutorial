import axios from "axios";
import React, { Component } from "react";


import "./DetailPost.css";


class DetailPost extends Component {

	state = {
		post: {
			title: '',
			body: '',
			imageUrl: ''
		}
	}


	componentDidMount() {
		const postId = this.props.match.params.postID
		axios.get(`http://localhost:3004/posts/${postId}`)
			.then(res => {
				const post = res.data;
				this.setState({
					post: {
						title: post.title,
						body: post.body,
						imageUrl: post.imageUrl
					}
				})
			})
	}

	render() {

		return (
			<div className="detail-post" >
				<img className="post-image" src={this.state.post.imageUrl} alt="image" />
				<p className="post-title" >{this.state.post.title}</p>
				<p className="post-body" >{this.state.post.body}</p>
			</div>
		)
	}
}

export default DetailPost;