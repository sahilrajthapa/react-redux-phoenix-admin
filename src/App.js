import React, { Component } from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import { Provider } from "react-redux";
import store from './store';

import Header from './components/layout/Header';
import SideBar from './components/layout/SideBar';
import Content from './components/content/Content';
import CreateForm from './components/content/CreateForm'
import Assignment from './components/content/Assignment'

import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Header />
            <SideBar />
            <Route exact path="/" component={Content} />
            <Route exact path="/create-form" component={CreateForm} />
            <Route exact path="/assignment" component={Assignment} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;