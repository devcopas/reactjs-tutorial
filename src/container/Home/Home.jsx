import React, { Component } from "react";
import YoutubeComponent from "../../component/YoutubeComponent/YoutubeComponent";
import Product from "../Product/Product";

class Home extends Component {
	render() {
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
				<p>Counter</p>
				<hr />
				<Product />
			</>
		)
	}
}

export default Home;