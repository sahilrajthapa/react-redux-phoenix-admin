import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './components/layout/Header';
import SideBar from './components/layout/SideBar';
import Content from './components/content/Content';
import CreateQset from './components/content/CreateQset'
import QuestionsType from "./components/content/QuestionsType";
import QuestionsList from './components/content/QuestionsList'
import  CreateQuestion from './components/content/CreateQuestion' 
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Header />
          <SideBar />
          <Switch>
            <Route path="/create-qset" component={CreateQset} />
            <Route path="/question-type" component={QuestionsType} />
            <Route path="/qset/:type" component={QuestionsList} />
            <Route path="/create-question/:type/:category" component={CreateQuestion} />
            <Route exact path="/" component={Content} />
          </Switch>
        </Fragment>
      </Router>
    );
  }
}

export default App