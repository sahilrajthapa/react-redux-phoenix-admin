import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { combineValidators, isRequired } from 'revalidate'
import TextFieldGroup from '../common/TextFieldGroup'
import { registerUser } from '../../actions/authActions'

const validate = combineValidators({
 username: isRequired({ message: 'Username is required' }),
 password: isRequired({ message: 'Password is required' }),
 fullname: isRequired({ message: 'FullName is required' }),
})

class Register extends Component {

  onSubmit = (values) => {
      console.log('submitted')
     const newUser = {
        username: values.username,
        password: values.password,
        fullName: values.fullName
     }

     this.props.registerUser(newUser, this.props.history);
  }
  render() {
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
                 type="password"
                 placeholder="Enter your password"                          
               />
               <Field
                 component={TextFieldGroup}
                 name="fullName"
                 placeholder="Enter your fullname"             
               />
              <button type="submit" className="btn btn-lg btn-primary btn-block btn-signin" disabled={invalid || submitting || pristine}>Register</button>
            </form>
          </div>
        </div>
      </div>

    )
  }
}

export default connect(null, { registerUser })(reduxForm({ form: "registerForm", validate })(withRouter(Register)));