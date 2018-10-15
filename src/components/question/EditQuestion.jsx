import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { combineValidators, isRequired } from 'revalidate';
import { updateIntroQuestion, updateCoreQuestion, getQuestions } from '../../actions/questionActions'
import TextFieldGroup from '../common/TextFieldGroup'
import ContentHeader from '../common/ContentHeader'

const validate = combineValidators({
    qlabel: isRequired({ message: 'Question label is required' }),
    qname: isRequired({ message: 'Question name is required' }),
    inputOptions: isRequired({ message: 'Options are required' })
})


class EditQuestion extends Component {
    state = {
        formType: this.props.initialValues.formType || '',
        showOptions: this.props.initialValues.inputOptions ? true : false
    }

    onFormTypeChange = (e) => {
        if (e.target.value === 'checkbox' || e.target.value === 'radio') {
            this.setState({
                [e.target.name]: e.target.value,
                showOptions: true
            })
        } else {
            this.setState({
                [e.target.name]: e.target.value,
                showOptions: false
            })
        }
    }

    onSubmit = (e) => {
        e.preventDefault();
        let { question } = this.props.question
        let { type, id, category } = this.props.match.params
        let Options = [];
        let filterQuest;

        if (this.state.inputOptions.trim().length > 0) {
            if (category === 'IntroQuestion') {
                filterQuest = question.introQuestions.filter(q => q._id === id)[0].options
            } else {
                filterQuest = question.coreQuestions.filter(q => q._id === id)[0].options
            }
            Options = this.state.inputOptions.split(';').map((opt) => {
                let filterOpt = filterQuest.filter(optItem => optItem.label === opt)[0]
                if (!filterOpt) {
                    return {
                        label: opt
                    }
                }
                return {
                    label: opt,
                    _id: filterOpt._id
                }
            })
        }

        let questData = {
            _id: id,
            name: this.state.qname,
            label: this.state.qlabel,
            formType: this.state.formType,
            options: Options
        }
        if (category === 'IntroQuestion') {
            this.props.updateIntroQuestion(question._id, id, type, questData, this.props.history)
        } else {
            this.props.updateCoreQuestion(question._id, id, type, questData, this.props.history)
        }

    }


    render() {
        const { invalid, submitting, pristine } = this.props;
        const { formType, showOptions } = this.state
        const options = [
            { label: "* Select Form Type", value: "* Select Form Type" },
            { label: "text", value: "text" },
            { label: "number", value: "number" },
            { label: "checkbox", value: "checkbox" },
            { label: "radio", value: "radio" }
        ];

        const selectOptions = options.map(option => (
            <option key={option.label} value={option.value}>
                {option.value}
            </option>
        ));

        console.log(this.props)
        return (
            <div className="content-wrapper">
                <ContentHeader heading="Edit Question" subHeading="Questions" />
                <div className="content">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="box box-primary">
                                <div className="box-header with-border">
                                    <h3 className="box-title">Question Form</h3>
                                </div>
                                <form onSubmit={this.onSubmit}>
                                    <div className="box-body">
                                        <Field
                                            component={TextFieldGroup}
                                            label="Question Name"
                                            name="qname"
                                            placeholder="Enter name for questions"
                                        />
                                        <Field
                                            component={TextFieldGroup}
                                            label="Question Label"
                                            name="qlabel"
                                            placeholder="Enter label of question"
                                        />
                                        <div className="form-group">
                                            <label htmlFor="formType">Form Type</label>
                                            <select
                                                className="form-control"
                                                name="formType"
                                                value={formType}
                                                onChange={this.onFormTypeChange}
                                            >
                                                {selectOptions}
                                            </select>
                                        </div>
                                        {showOptions &&
                                            <Field
                                                component={TextFieldGroup}
                                                label="Options"
                                                name="inputOptions"
                                                placeholder="Enter options for question"
                                                info="For now please enter options field as : female; male; nogender"
                                            />
                                        }
                                    </div>
                                    <div className="box-footer">
                                        <button type="submit" className="btn btn-primary" disabled={invalid
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

const mapStateToProps = (state, ownProps) => {
    const questionId = ownProps.match.params.id;
    let editQuest = {};
    let opt;
    if (questionId && Object.keys(state.question.question).length > 0) {
        if (ownProps.match.params.category === 'IntroQuestion') {
            editQuest = state.question.question.introQuestions.filter(q => q._id === ownProps.match.params.id)[0]
        } else {
            editQuest = state.question.question.coreQuestions.filter(q => q._id === ownProps.match.params.id)[0]
        }
        if (editQuest.options.length > 0) {
            opt = editQuest.options.map((opt => {
                return opt.label
            })).join(';')

        }
    }
    let newQuest = {
        qname: editQuest.name,
        qlabel: editQuest.label,
        formType: editQuest.formType,
        inputOptions: opt
    }
    return {
        initialValues: newQuest,
        question: state.question
    };
};

export default connect(mapStateToProps, { updateIntroQuestion, updateCoreQuestion, getQuestions })(withRouter(reduxForm({ form: "editQuestionForm", enableReinitialize: true, validate })(EditQuestion)));
