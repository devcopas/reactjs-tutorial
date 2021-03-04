import React, { Component, createContext } from 'react';

const MainContext = createContext();

//! Provider
const Provider = MainContext.Provider;

const GlobalProvider = Children => {
    return class ParentComponent extends Component {
        state = {
            totalOrder: 5,
        };

        dispatch = action => {
            if (action.type === 'MINUS_ORDER') {
                if (this.state.totalOrder === 0) return;
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
            return (
                <Provider
                    value={{
                        state: this.state,
                        dispatch: this.dispatch,
                    }}>
                    <Children {...this.props} />
                </Provider>
            );
        }
    };
};

export default GlobalProvider;

//! Consumer
const Consumer = MainContext.Consumer;
export const GlobalConsumer = Children => {
    return class ParentConsumer extends Component {
        render() {
            return (
                <Consumer>
                    {value => {
                        return <Children {...this.props} {...value} />;
                    }}
                </Consumer>
            );
        }
    };
};
