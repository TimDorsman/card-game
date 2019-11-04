import React, { Component } from 'react';
import About from '../../About';
import Home from '../../Home';
import { Switch, Route } from 'react-router-dom';

class RouterDOM extends Component {
    state = {}
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
            </Switch>
        );
    }
}

export default RouterDOM;