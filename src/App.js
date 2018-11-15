import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from 'react-redux'

import store from './store';

import Header from './components/layout/Header';
import SideBar from './components/layout/SideBar';
import Content from './components/content/Content';
import CreateQset from './components/content/CreateQset'
import QuestionsType from "./components/content/QuestionsType";
import QuestionsList from './components/content/QuestionsList'
import  CreateQuestion from './components/content/CreateQuestion' 
import Assignment from "./components/content/Assignment"
import EditQuestion from './components/content/EditQuestion'
import ReduxToastr from 'react-redux-toastr';
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css';
import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Fragment>
            <ReduxToastr preventDuplicates position='bottom-right' transitionIn='fadeIn' transitionOut='fadeOut' />
            <Header />
            <SideBar />
            <Switch>
              <Route path="/create-qset" component={CreateQset} />
              <Route path="/question-type" component={QuestionsType} />
              <Route path="/qset/:type" component={QuestionsList} />
              <Route path="/create-question/:type/:category" component={CreateQuestion} />
              <Route path="/edit-question/:type/:category/:id" component={EditQuestion} />
              <Route exact path="/" component={Content} />
              <Route exact path="/assignment" component={Assignment} />
            </Switch>
          </Fragment>
        </Router>
      </Provider>
    );
  }
}

export default App