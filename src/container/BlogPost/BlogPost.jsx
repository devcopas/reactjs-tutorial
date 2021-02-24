import React, { Component } from "react";
import axios from "axios";

import Post from "../../component/Post/Post";
import "./BlogPost.css"

class BlogPost extends Component {
	state = {
		posts: []
	}

	componentDidMount() {
		//! use fetch
		// fetch(`https://jsonplaceholder.typicode.com/posts`)
		// 	.then(response => response.json())
		// 	.then(response => {
		// 		this.setState({
		// 			posts: response
		// 		})
		// 	})

		//! use axios
		axios.get(`https://jsonplaceholder.typicode.com/posts`)
			.then(res => {
				this.setState({ posts: res.data })
			})
	}

	showPost = () => this.state.posts.map(p => {
		return <Post key={p.id} title={p.title} desc={p.body} />
	})


	render() {
		console.log(this.state.posts)

		return (
			<>
				<p className="section-title">Blog Post</p>
				{this.showPost()}
			</>
		)
	}
}

export default BlogPost;