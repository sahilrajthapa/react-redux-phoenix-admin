import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { combineValidators, isRequired } from 'revalidate';
import TextFieldGroup from '../common/TextFieldGroup'
import { loginUser } from '../../actions/authActions';

const validate = combineValidators({
 username: isRequired({ message: 'Username is required' }),
 password: isRequired({ message: 'Password is required' }),
})

class Login extends Component {
  // state = {
  //   username: '',
  //   password: ''
  // }

  onSubmit = (values) => {
    console.log('submitted')
    const userData = {
      username: values.username,
      password: values.password
    }
    this.props.loginUser(userData, this.props.history)
  }
  render() {
    // const { username, password } = this.state
    const { invalid, submitting, pristine } = this.props;
    return (
      <div className="login">
        <div className="container">
          <div className="card card-container">

            <img id="profile-img" className="profile-img-card" src="//ssl.gstatic.com/accounts/ui/avatar_2x.png" alt="user avatar" />
            <p id="profile-name" className="profile-name-card"></p>
            <form className="form-signin" onSubmit={this.props.handleSubmit(this.onSubmit)}>
               <Field
                 component={TextFieldGroup}
                 name="username"
                 placeholder="Enter your name"     
               />
               <Field
                 component={TextFieldGroup}
                 name="password"
                 placeholder="Enter your password"
                 type="password"              
               />
              <button type="submit" className="btn btn-lg btn-primary btn-block btn-signin" disabled={invalid || submitting || pristine}>Log in</button>
            </form>
             <div className="signup-link">
               <p>Don't have an account! <Link to="/admin/register">Sign Up Here</Link></p>
             </div>
          </div>
        </div>
      </div>

    )
  }
}

export default connect(null, { loginUser })(reduxForm({ form: "loginForm", validate })(withRouter(Login)));