import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from 'react-redux'
import ReduxToastr from 'react-redux-toastr';

import store from './store';

import Header from './components/layout/Header';
import SideBar from './components/layout/SideBar';
import Content from './components/question/Content';
import CreateQset from './components/question/CreateQset'
import QuestionsType from "./components/question/QuestionsType";
import QuestionsList from './components/question/QuestionsList'
import CreateQuestion from './components/question/CreateQuestion'
import EditQuestion from './components/question/EditQuestion'
import Unassigned from './components/user-assignment/Unassigned'
import Assigned from './components/user-assignment/Assigned'
import UserList from "./components/QR/UserListCont"

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
              <Route path="/admin/create-qset" component={CreateQset} />
              <Route path="/admin/question-type" component={QuestionsType} />
              <Route path="/admin/qset/:type" component={QuestionsList} />
              <Route path="/admin/create-question/:type/:category" component={CreateQuestion} />
              <Route path="/admin/edit-question/:type/:category/:id" component={EditQuestion} />
              <Route path="/admin/unassigned" component={Unassigned} />
              <Route path="/admin/assigned" component={Assigned} />
              <Route path="/admin/qrcode" component={UserList} />
              <Route exact path="/admin" component={Content} />            
            </Switch>   
          </Fragment>
        </Router>
      </Provider>
    );
  }
}

export default App