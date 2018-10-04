import React, { Component } from 'react'

class Login extends Component {
  state = {
    email: '',
    password: '',
    errors: {}
    }
  render() {
    return (
        <div className="login">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Log In</h1>
              <p className="lead text-center">
                Sign in to your Phoenix account
              </p>
              <form onSubmit={this.onSubmit}>
                <TextFieldGroup 
                   name="email"
                   type="email"
                   placeholder="Email Address"
                   value={this.state.email}
                   onChange={this.onChange}
                   error={errors.email}
                />
                <TextFieldGroup 
                   name="password"
                   type="password"
                   placeholder="Password"
                   value={this.state.password}
                   onChange={this.onChange}
                   error={errors.password}
                />
                
                <input type="submit" className="btn btn-info btn-block mt-4" />
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Login