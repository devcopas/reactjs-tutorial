import React, { Component } from "react";
// import YoutubeComponent from "../../component/YoutubeComponent/YoutubeComponent";
// import LifeCycleComponent from "../LifeCycleComponent/LifeCycleComponent";
// import Product from "../Product/Product";
import BlogPost from "../BlogPost/BlogPost"

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
		const show = this.state.showComponent;

		return (
			<>
				{/* <p>Youtube Component</p>
				<hr />
				<YoutubeComponent
					time="6.15"
					title="Pengenalan React Bagian 1"
					description="3x ditonton, 2 hari yang lalu" />
				<YoutubeComponent
					time="10.22"
					title="Pengenalan React Bagian 2"
					description="22x ditonton, 1 hari yang lalu" />
				<YoutubeComponent
					time="24.08"
					title="Pengenalan React Bagian 3"
					description="10x ditonton, 7 hari yang lalu" />
				<YoutubeComponent
					time="2.59"
					title="Pengenalan React Bagian 4"
					description="1K ditonton, 3 hari yang lalu" />
				<YoutubeComponent /> */}

				{/* <p>Counter</p>
				<hr />
				<Product /> */}

				{/* <p>LifeCycle Component</p>
				<hr />
				{
					this.state.showComponent ? <LifeCycleComponent show={show} /> : null
				} */}

				<p>Blog Post</p>
				<hr />
				<BlogPost />
			</>
		)
	}
}

export default Home;