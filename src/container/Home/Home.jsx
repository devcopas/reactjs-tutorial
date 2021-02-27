//libraries
import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

//pages
import BlogPost from "../pages/BlogPost/BlogPost";
import Product from "../pages/Product/Product";
import LifeCycleComponent from "../pages/LifeCycleComponent/LifeCycleComponent";
import Youtube from "../pages/Youtube/Youtube";


import "./Home.css"
import DetailPost from "../pages/BlogPost/DetailPost/DetailPost";


class Home extends Component {

	state = {
		showComponent: true
	}

	componentDidMount() {
		// console.log("componentDidMount \n" + "show :" + this.state.showComponent);

		// setTimeout(() => {
		// 	this.setState({ showComponent: false });
		// }, 5000);
	}

	render() {

		return (
			<Router>
				<div className="navigation">
					<Link to="/" >Home</Link>
					<Link to="/product" >Product</Link>
					<Link to="/lifecycle" >Lifecycle</Link>
					<Link to="/youtube">Youtube</Link>
				</div>
				<Route path="/" exact component={BlogPost} />
				<Route path="/detail-post/:postID" component={DetailPost} />
				<Route path="/product" component={Product} />
				<Route path="/lifecycle" component={LifeCycleComponent} />
				<Route path="/youtube" component={Youtube} />
			</Router>
		)
	}
}

export default Home;