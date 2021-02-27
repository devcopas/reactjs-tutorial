import React, { Component } from "react";

class CardProduct extends Component {

	state = {
		order: 1
	};

	handleCounterChange = () => {
		this.props.onCounterChange(this.state.order);
	}

	handlePlus = () => {
		this.setState({
			order: this.state.order + 1
		}, () => this.handleCounterChange())

	}

	handleMinus = () => {
		if (this.state.order === 0) return;
		this.setState({
			order: this.state.order - 1
		}, () => this.handleCounterChange())
	}

	handleOnChange = (e) => {
		this.setState({
			order: parseInt(e.target.value)
		}, () => this.handleCounterChange())
		if (!e.target.value) this.setState({ order: 0 })
	}

	render() {

		return (
			<div className="card">
				<img src="https://ecs7.tokopedia.net/img/cache/900/attachment/2021/2/1/65580410/65580410_1d2bdace-2ad8-4de6-99b6-afc360a3c87d.jpg" alt="" width="100%" />
				<p className="product-title">
					Daging Ayam Berbumbu Rasa Original
				</p>
				<p className="product-price">
					Rp 410,000
				</p>
				<div className="counter">
					<button className="minus" onClick={this.handleMinus}>
						-
					</button>
					<input type="text" value={this.state.order} onChange={this.handleOnChange} />
					<button className="plus" onClick={this.handlePlus}>
						+
					</button>
				</div>
			</div>
		)
	}
}

export default CardProduct;