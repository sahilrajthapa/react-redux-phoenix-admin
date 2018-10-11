import React, { Component } from 'react'
import {  withRouter } from 'react-router-dom'
import  { connect } from 'react-redux';
import { addQuestionType } from '../../actions/questionActions'
import TextFieldGroup from '../common/TextFieldGroup'
import ContentHeader from '../common/ContentHeader'

class CreateForm extends Component {
  state = {
    type: '',
    dueDate: '',
  }
  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onSubmit = (e) => {
    e.preventDefault()
    const questData = {
           ...this.state,
           introQuestions: [],
           coreQuestions: [],
    }
    this.props.addQuestionType(questData,this.props.history)

  }
  render() {
    return (
      <div className="content-wrapper">
        <ContentHeader heading="Create Question Set" subHeading="Questions"/>
        <div className="content">
          <div className="row">
            <div className="col-md-6">
              <div className="box box-primary">
                <div className="box-header with-border">
                  <h3 className="box-title">Question Set Form</h3>
                </div>
                <form onSubmit={this.onSubmit}>
                  <div className="box-body">
                    <TextFieldGroup
                      label="Type"
                      name="type"
                      placeholder="Enter type for questions"
                      value={this.state.type}
                      onChange={this.onChange}
                    />
                    <TextFieldGroup
                      label="DueDate"
                      name="dueDate"
                      type="date"
                      placeholder="Enter type of question"
                      value={this.state.dueDate}
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="box-footer">
                    <button type="submit" className="btn btn-primary">Submit</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(null,{ addQuestionType })(withRouter(CreateForm))
