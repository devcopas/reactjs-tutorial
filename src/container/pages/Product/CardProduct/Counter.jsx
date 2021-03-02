import React, { Component } from 'react';
import { connect } from 'react-redux';

import ActionType from '../../../../redux/reducer/globalActionType';

class Counter extends Component {
    // state = {
    // 	order: 1
    // };

    // handleCounterChange = () => {
    // 	this.props.onCounterChange(this.state.order);
    // }

    // handlePlus = () => {
    // 	this.setState({
    // 		order: this.props.order + 1
    // 	}, () => this.handleCounterChange())

    // }

    // handleMinus = () => {
    // 	if (this.props.order === 0) return;
    // 	this.setState({
    // 		order: this.state.order - 1
    // 	}, () => this.handleCounterChange())
    // }

    handleOnChange = e => {
        this.setState(
            {
                order: parseInt(e.target.value),
            },
            () => this.handleCounterChange()
        );
        if (!e.target.value) this.setState({ order: 0 });
    };

    render() {
        console.log(this.props);
        return (
            <div className='counter'>
                <button className='minus' onClick={this.props.handleMinus}>
                    -
                </button>
                <input type='text' value={this.props.order} onChange={this.handleOnChange} />
                <button className='plus' onClick={this.props.handlePlus}>
                    +
                </button>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        order: state.totalOrder,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        handlePlus: () => {
            dispatch({ type: ActionType.PLUS_ORDER });
        },
        handleMinus: () => {
            dispatch({ type: ActionType.MINUS_ORDER });
        },
    };
};

// parameter pertama untuk memanggil state global, parameter kedua untuk memanggil fungsi dispatch
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
