import React, { Component } from 'react';
// import { connect } from 'react-redux';
import './Product.css';

import { MainContext } from '../../Home/Home';
import CardProduct from './CardProduct/CardProduct';

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
        // 	return (
        // 		<>
        // 			<h3>Product</h3>
        // 			<hr />
        // 			<div className="header">
        // 				<div className="logo">
        // 					<img src="" alt="" />
        // 				</div>
        // 				<div className="troley">
        // 					<img src="https://dtq2i388ejbah.cloudfront.net/images/user/my-transaction-blk.svg" alt="" />
        // 					<div className="count">{this.props.order}</div>
        // 				</div>
        // 			</div>
        // 			<CardProduct />
        // 		</>
        // 	)
        // }

        return (
            <MainContext.Consumer>
                {value => {
                    return (
                        <>
                            <h3>Product</h3>
                            <hr />
                            <div className="header">
                                <div className="logo">
                                    <img src="" alt="" />
                                </div>
                                <div className="troley">
                                    <img
                                        src="https://dtq2i388ejbah.cloudfront.net/images/user/my-transaction-blk.svg"
                                        alt=""
                                    />
                                    <div className="count">{value.state.totalOrder}</div>
                                </div>
                            </div>
                            <CardProduct />
                        </>
                    );
                }}
            </MainContext.Consumer>
        );
    }
}

const mapStateToProps = state => {
    return {
        order: state.totalOrder,
    };
};

// export default connect(mapStateToProps)(Product);

export default Product;
