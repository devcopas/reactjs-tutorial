import React, { Component } from "react";
import { connect } from 'react-redux';
import "./Product.css";


import CardProduct from "./CardProduct/CardProduct"

class Product extends Component {
	// state = {
	// 	order: 1
	// };

	// onCounterChangeHandle = (newValue) => {
	// 	this.setState({
	// 		order: newValue
	// 	})
	// }

	render() {
		console.log(this.props)
		return (
			<>
				<h3>Product</h3>
				<hr />
				<div className="header">
					<div className="logo">
						<img src="" alt="" />
					</div>
					<div className="troley">
						<img src="https://dtq2i388ejbah.cloudfront.net/images/user/my-transaction-blk.svg" alt="" />
						<div className="count">{this.props.order}</div>
					</div>
				</div>
				<CardProduct />
			</>
		)
	}
}


const mapStateToProps = state => {
	return {
		order: state.totalOrder
	}
}

export default connect(mapStateToProps)(Product);