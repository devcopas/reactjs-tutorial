import React, { Component } from "react";
import axios from "axios";
import "./BlogPost.css";

import FormPost from "../../component/FormPost/FormPost";
import Post from "../../component/Post/Post";


const initialFormBlogPost = {
    formBlogPost: {
        id: '',
        title: '',
        body: '',
        imageUrl: '',
        userId: 1
    }
}

const person={first:"paris"};

class BlogPost extends Component {

    state = {
        posts: [],
        ...initialFormBlogPost,
        isUpdate: false
    }

    // API method
    getDataPostAPI = () => {
        axios.get(`http://localhost:3004/posts?_sort=id&_order=desc`)
            .then(res => {
                this.setState({
                    posts: res.data
                })
            })
    }

    postDataPostAPI = () => {
        axios.post(`http://localhost:3004/posts/`, this.state.formBlogPost)
            .then(() => this.getDataPostAPI(),
                err => console.error('error :', err)
            );
    }

    putDataPostAPI = () => {
        axios.put(`http://localhost:3004/posts/${this.state.formBlogPost.id}`, this.state.formBlogPost)
            .then(() => this.getDataPostAPI(),
                err => console.error('error :', err)
            );
    }

    deleteDataPostAPI = (postId) => {
        axios.delete(`http://localhost:3004/posts/${postId}`)
            .then(res => {
                console.log(res);
                this.getDataPostAPI();
            }, err => {
                console.log(err);
            })
    }



    // handle method
    handleDelete = (postId) => {
        window.confirm("Are you sure you want to delete this post?")
            &&
            this.deleteDataPostAPI(postId);
    }

    handleUpdate = (e, postData) => {
        const formPosition = e.target.parentElement.parentElement.parentElement.parentElement.previousElementSibling.previousElementSibling.offsetTop;

        window.scrollTo({
            top: formPosition,
            left: 0,
            behavior: 'smooth'
        });

        this.setState({
            formBlogPost: postData,
            isUpdate: true
        });
    }

    handleFormChange = (e) => {
        const formBlogPostNew = { ...this.state.formBlogPost };
        const timestamp = new Date().getTime();
        if (!this.state.isUpdate) {
            formBlogPostNew['id'] = timestamp;
        }
        formBlogPostNew[e.target.name] = e.target.value;

        this.setState({
            formBlogPost: formBlogPostNew
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const { title, imageUrl, body, id } = this.state.formBlogPost;
        if (!title) {
            alert("title can't be blank, please type something!");
            return
        } else if (!imageUrl) {
            alert("Image URL can't be blank, please type something!");
            return
        } else if (!body) {
            alert("Blog Content cant be blank please type something!");
            return
        }

        if (this.state.isUpdate) this.putDataPostAPI();
        else this.postDataPostAPI();

        this.setState({
            ...initialFormBlogPost,
            isUpdate: false
        });
    }


    componentDidMount() {
        this.getDataPostAPI();
    }


    showPost = () => this.state.posts.map(post => {
        return (
            <Post
                key={post.id}
                data={post}
                remove={this.handleDelete}
                update={this.handleUpdate}
            />
        )
    })


    render() {

        return (
            <>
                <section id="form">
                    <FormPost
                        state={this.state.formBlogPost}
                        handleSubmit={this.handleSubmit}
                        handleFormChange={this.handleFormChange}
                    />
                </section>
                <section className="post-section">
                    <h1 className="section-title">Blog Post</h1>
                    <div className="post-section__content">
                        {this.showPost()}
                    </div>
                </section>
            </>
        )
    }
}

export default BlogPost;