import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'
import Home from './components/home';
import About from './components/about';

class App extends React.Component {
    render() {
        return (
            <Router history={hashHistory}>
                <Route path='/' component={Container}>
                    <IndexRoute component={Home} />
                    <Route path='/about' component={About} />
                    <Route path='*' component={NotFound} />
                </Route>
            </Router>
      	);
    }
}

const Nav = () => (
    <div>
        <Link to='/'>Home</Link>&nbsp;
        <Link to='/about'>About</Link>
    </div>
)

const Container = (props) => (
    <div>
        <Nav />
        {props.children}
    </div>
)

const NotFound = () => (
    <h1>404.. This page is not found!</h1>
)

export default App;
