import React, { Component } from "react";
import axios from "axios";

import Post from "../../component/Post/Post";
import "./BlogPost.css"

class BlogPost extends Component {
   state = {
      posts: [],
      formBlogPost: {
         id: '',
         title: '',
         body: '',
         imageUrl: '',
         userId: 1
      }
   }

   getPostAPI = () => {
      axios.get(`http://localhost:3004/posts?_sort=id&_order=desc`)
         .then(res => {
            this.setState({
               posts: res.data
            })
         })
   }

   postDataToAPI = (data) => {
      axios.post(`http://localhost:3004/posts/`, this.state.formBlogPost)
         .then(res => this.getPostAPI(), err => console.log('error :', err))
   }

   handleRemove = (postId) => {
      window.confirm("Are you sure you want to delete this post?")
         &&
         axios.delete(`http://localhost:3004/posts/${postId}`)
            .then(res => this.getPostAPI());
      ;
   }

   handleFormChange = (e) => {
      const formBlogPostNew = { ...this.state.formBlogPost };
      const timestamp = new Date().getTime();
      formBlogPostNew['id'] = timestamp;
      formBlogPostNew[e.target.name] = e.target.value;
      this.setState({
         formBlogPost: formBlogPostNew
      })

   }

   handleSubmit = (e) => {
      const { title, imageUrl, body } = this.state.formBlogPost;

      if (title === "" || imageUrl === "" || body === "") {
         alert("tidak boleh kosong");
         return false
      }

      this.setState({
         formBlogPost: {
            id: '',
            title: '',
            body: '',
            imageUrl: '',
            userId: 1
         }
      })

      this.postDataToAPI();
   }

   componentDidMount() {
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
            <div className="form-add-post">
               <label htmlFor="title">Title</label>
               <input
                  type="text"
                  name="title"
                  placeholder="add title here"
                  value={this.state.formBlogPost.title}
                  onChange={this.handleFormChange} />
               <label htmlFor="imageUrl">Image URL</label>
               <input
                  type="text"
                  name="imageUrl"
                  placeholder="add image url here"
                  value={this.state.formBlogPost.imageUrl}
                  onChange={this.handleFormChange} />
               <label htmlFor="body">Blog Content</label>
               <textarea
                  name="body"
                  id="body"
                  cols="30"
                  rows="10"
                  placeholder="add content here"
                  value={this.state.formBlogPost.body}
                  onChange={this.handleFormChange} ></textarea>
               <button
                  className="btn-submit"
                  type="button"
                  onClick={this.handleSubmit}>Save</button>
            </div>
            <p className="section-title">Blog Post</p>
            { this.showPost()}
         </>
      )
   }
}

export default BlogPost;