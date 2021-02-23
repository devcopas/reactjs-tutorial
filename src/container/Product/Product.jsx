import React, { Component } from "react";
import "./Product.css"

import CardProduct from "../CardProduct/CardProduct"

class Product extends Component {
	state = {
		order: 1
	};

	onCounterChangeHandle = (newValue) => {
		this.setState({
			order: newValue
		})
	}

	render() {
		console.log(this.state.order)
		return (
			<>
				<div className="header">
					<div className="logo">
						<img src="" alt="" />
					</div>
					<div className="troley">
						<img src="https://dtq2i388ejbah.cloudfront.net/images/user/my-transaction-blk.svg" alt="" />
						<div className="count">{this.state.order}</div>
					</div>
				</div>
				<CardProduct onCounterChange={(value) => this.onCounterChangeHandle(value)} />
			</>
		)
	}
}

export default Product;