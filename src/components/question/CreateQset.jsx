import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form'
import { combineValidators, isRequired} from 'revalidate';
import { addQuestionType } from '../../actions/questionActions'
import TextFieldGroup from '../common/TextFieldGroup'
import ContentHeader from '../common/ContentHeader'

const validate = combineValidators({
  type: isRequired({ message: 'Question Type is required'}),
  dueDate: isRequired({message: 'Due Date is required'}),
})
class CreateForm extends Component {
  onSubmit = (values) => {
    const questData = {
      ...values,
      introQuestions: [],
      coreQuestions: [],
    }
    this.props.addQuestionType(questData, this.props.history)

  }
  render() {
    const { invalid, submitting, pristine } = this.props;
    return (
      <div className="content-wrapper">
        <ContentHeader heading="Create Question Set" subHeading="Questions" />
        <div className="content">
          <div className="row">
            <div className="col-md-6">
              <div className="box box-primary">
                <div className="box-header with-border">
                  <h3 className="box-title">Question Set Form</h3>
                </div>
                <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                  <div className="box-body">
                  <Field
                      component={TextFieldGroup}
                      label="Type"
                      name="type"
                      placeholder="Enter type for questions"
                    />
                    <Field
                      component={TextFieldGroup}
                      label="DueDate"
                      name="dueDate"
                      type="date"
                      placeholder="Enter type of question"                  
                    />
                  </div>
                  <div className="box-footer">
                    <button type="submit" className="btn btn-primary" disabled={ invalid 
                    || submitting || pristine}>Submit</button>
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

export default connect(null, { addQuestionType })(withRouter(reduxForm({ form: "createQset", validate })(CreateForm)))
