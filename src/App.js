import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { Provider } from 'react-redux'
import ReduxToastr from 'react-redux-toastr';
import jwt_decode from 'jwt-decode';

import setAuthToken from './utils/setAuthToken';
import { setCurrentUser, logoutUser } from './actions/authActions';
import store from './store';

import MainAdminLayout from './components/layout/MainAdminLayout'
import MainLayout from './components/layout/MainLayout'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import Content from './components/question/Content'
import CreateQset from './components/question/CreateQset'
import QuestionsType from "./components/question/QuestionsType"
import QuestionsList from './components/question/QuestionsList'
import CreateQuestion from './components/question/CreateQuestion'
import EditQuestion from './components/question/EditQuestion'
import Unassigned from './components/user-assignment/Unassigned'
import Assigned from './components/user-assignment/Assigned'
import UserList from "./components/QR/UserListCont"

import 'react-redux-toastr/lib/css/react-redux-toastr.min.css';
import "./App.css";

if(localStorage.jwtToken){
  setAuthToken(localStorage.jwtToken);
  const decoded = jwt_decode(localStorage.jwtToken);
  store.dispatch(setCurrentUser(decoded));
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    store.dispatch(logoutUser());
    window.location.href = '/admin/login';
  }
}
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Fragment>
            <ReduxToastr preventDuplicates position='bottom-right' transitionIn='fadeIn' transitionOut='fadeOut' />
              <Switch>
                <MainAdminLayout path="/admin/create-qset" component={CreateQset} />
                <MainAdminLayout path="/admin/question-type" component={QuestionsType} />
                <MainAdminLayout path="/admin/qset/:type" component={QuestionsList} />
                <MainAdminLayout path="/admin/create-question/:type/:category" component={CreateQuestion} />
                <MainAdminLayout path="/admin/edit-question/:type/:category/:id" component={EditQuestion} />
                <MainAdminLayout path="/admin/unassigned" component={Unassigned} />
                <MainAdminLayout path="/admin/assigned" component={Assigned} />
                <MainAdminLayout path="/admin/qrcode" component={UserList} />
                <MainLayout path="/admin/login" component={Login} />
                <MainLayout path="/admin/register" component={Register} />
                <MainAdminLayout exact path="/admin" component={Content} />            
              </Switch>
          </Fragment>
        </Router>
      </Provider>
    );
  }
}

export default App