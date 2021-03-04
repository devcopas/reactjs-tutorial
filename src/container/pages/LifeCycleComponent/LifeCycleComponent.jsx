import React, { Component } from 'react';
// import { connect } from 'react-redux';

import { GlobalConsumer } from '../../../context/context';
import './LifeCycleComponent.css';

class LifeCycleComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 1,
        };
        console.log('constructor');
    }

    static getDerivedStateFromProps(props, state) {
        console.log('getDerivedStateFromProps');
        return null;
    }

    componentDidMount() {
        console.log('componentDidMount');
        // setTimeout(() => {
        // 	this.setState({ count: 2 })
        // }, 2000);
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.group('shouldComponentUpdate' + '\n' + 'count :' + nextState.count);

        console.log('this.state :', this.state.count);
        console.log('nextState :', nextState.count);
        console.groupEnd();

        if (nextState.count >= 4) {
            return false;
        }

        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('getSnapshotBeforeUpdate' + '\n' + 'count :' + prevState.count);
        return null;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate \n' + 'count :' + prevState.count);
    }

    componentWillUnmount() {
        console.log('componentWillUnmount \n' + 'show :' + this.props.show);
        console.log(this.props);
    }

    changeCount = () => {
        this.setState({
            count: this.state.count + 1,
        });
    };

    render() {
        console.log('render \n' + 'count :' + this.state.count);
        console.log(this.props);

        // return (
        // 	<>
        // 		<h3>LifeCycle Component</h3>
        // 		<hr />
        // 		<button
        // 			className="btn"
        // 			onClick={this.changeCount} >
        // 			Component Button {this.state.count}
        // 		</button>
        // 		<hr />
        // 		<h5>Total Order: {this.props.order}</h5>
        // 	</>
        // )
        return (
            <>
                <h3>LifeCycle Component</h3>
                <hr />
                <button className="btn" onClick={this.changeCount}>
                    Component Button {this.state.count}
                </button>
                <hr />
                <h5>Total Order: {this.props.state.totalOrder}</h5>
            </>
        );
    }
}

const mapStateToProps = state => {
    return {
        order: state.totalOrder,
    };
};

// export default connect(mapStateToProps)(LifeCycleComponent);

// high order component
export default GlobalConsumer(LifeCycleComponent);
