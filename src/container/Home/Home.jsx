//libraries
import React, { Component, createContext } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

//pages
import BlogPost from '../pages/BlogPost/BlogPost';
import Product from '../pages/Product/Product';
import LifeCycleComponent from '../pages/LifeCycleComponent/LifeCycleComponent';
import Youtube from '../pages/Youtube/Youtube';

import './Home.css';
import DetailPost from '../pages/BlogPost/DetailPost/DetailPost';

// Using Context API
export const MainContext = createContext();
const Provider = MainContext.Provider;

class Home extends Component {
    // state = {
    //     showComponent: true,

    // };

    // componentDidMount() {
    //     console.log("componentDidMount \n" + "show :" + this.state.showComponent);
    //     setTimeout(() => {
    //     	this.setState({ showComponent: false });
    //     }, 5000);
    // }

    // Using Context API
    state = {
        totalOrder: 5,
    };

    dispatch = action => {
        if (action.type === 'MINUS_ORDER') {
            this.setState({
                totalOrder: this.state.totalOrder - 1,
            });
        }
        if (action.type === 'PLUS_ORDER') {
            this.setState({
                totalOrder: this.state.totalOrder + 1,
            });
        }
    };

    render() {
        const { state, dispatch } = this;

        return (
            <Router>
                <Provider
                    value={{
                        state,
                        dispatch,
                    }}>
                    <div className="navigation">
                        <Link to="/">Home</Link>
                        <Link to="/product">Product</Link>
                        <Link to="/lifecycle">Lifecycle</Link>
                        <Link to="/youtube">Youtube</Link>
                    </div>
                    <Route path="/" exact component={BlogPost} />
                    <Route path="/detail-post/:postID" component={DetailPost} />
                    <Route path="/product" component={Product} />
                    <Route path="/lifecycle" component={LifeCycleComponent} />
                    <Route path="/youtube" component={Youtube} />
                </Provider>
            </Router>
        );
    }
}

export default Home;
