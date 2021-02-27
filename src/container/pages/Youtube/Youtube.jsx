import React, { Component } from "react";
import YoutubeComponent from "../../../component/YoutubeComponent/YoutubeComponent";


class Youtube extends Component {
	render() {
		return (
			<>
				<h3>Youtube</h3>
				<hr />
				<YoutubeComponent
					ime="12:20"
					title="Pengenalan React 1"
					description="Materi react JS 1"
				/>
				<YoutubeComponent
					ime="15:20"
					title="Pengenalan React 2"
					description="Materi react JS 2"
				/>
				<YoutubeComponent
					ime="19:20"
					title="Pengenalan React 3"
					description="Materi react JS 3"
				/>
				<YoutubeComponent
					ime="5:20"
					title="Pengenalan React 4"
					description="Materi react JS 4"
				/>
			</>
		)
	}
}

export default Youtube;