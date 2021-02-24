import React, { Component } from "react";
import axios from "axios";

import Post from "../../component/Post/Post";
import "./BlogPost.css"

class BlogPost extends Component {
   state = {
      posts: []
   }

   getPostAPI = () => {
      axios.get(`http://localhost:3004/posts`)
         .then(res => {
            this.setState({
               posts: res.data
            })
         })
   }

   handleRemove = (postId) => {
      window.confirm("Are you sure you want to delete this post?")
         &&
         axios.delete(`http://localhost:3004/posts/${postId}`)
            .then(res => this.getPostAPI());
      ;
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

      this.getPostAPI();
   }

   showPost = () => this.state.posts.map(post => {
      return (
         <Post
            key={post.id}
            data={post}
            remove={this.handleRemove}
         />
      )
   })

   render() {

      return (
         <>
            <p className="section-title">Blog Post</p>
            {this.showPost()}
         </>
      )
   }
}

export default BlogPost;