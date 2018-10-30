import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory, Link } from 'react-router';
import * as serviceWorker from './serviceWorker';
import Home from './page/Home'
import About from './page/About'
import Repos from './page/Repos'
import RepoDetails from './page/RepoDetails'
import ServerError from './page/ServerError'

class App extends Component {
  render() {
    return (
      <div>
        <header>App</header>
        <menu>
          <ul>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/repos">Repos</Link></li>
          </ul>
        </menu>
        {console.log(this.props.children)}
        {this.props.children}
      </div>
    );
  }
}

ReactDOM.render((
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home}></IndexRoute>
            <Route path="about" component={About}></Route>
            <Route path="repos" component={Repos}>
                <Route path="/repo/:repo_name" component={RepoDetails}></Route>
            </Route>
            <Router path="error" component={ServerError}></Router>
        </Route>
    </Router>
), document.getElementById('root'));

serviceWorker.unregister();
