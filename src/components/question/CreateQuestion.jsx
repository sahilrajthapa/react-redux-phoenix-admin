import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { combineValidators, isRequired} from 'revalidate';
import { addIntroQuestion, addCoreQuestion, getQuestions } from '../../actions/questionActions'
import TextFieldGroup from '../common/TextFieldGroup'
import ContentHeader from '../common/ContentHeader'


const validate = combineValidators({
    qlabel: isRequired({ message: 'Question label is required'}),
    qname: isRequired({message: 'Question name is required'}),
    inputOptions: isRequired({message: 'Options are required'})
 })

class CreateQuestion extends Component {
    state = {
        // qname: '',
        // qlabel: '',
        // inputOptions: '',
        formType: '',
        showOptions: false,
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

    onSubmit = (values) => {
        let { question } = this.props.question
        let { type, category } = this.props.match.params
        let  filterOpt = [];
        
        if(values.inputOptions && values.inputOptions.trim().length > 0){
           filterOpt = this.state.inputOptions.split(';').map((opt) => {
                return {
                    label: opt
                }
           })
        }

        if (category === 'IntroQuestion') {
            let introData = {
                name: values.qname,
                label: values.qlabel,
                formType: this.state.formType,
                options: filterOpt
            }
            this.props.addIntroQuestion(question._id, type, introData, this.props.history)
        } else {

        let coreData = {
            name: values.qname,
            label: values.qlabel,
            formType: this.state.formType,
            options: filterOpt
        }
        this.props.addCoreQuestion(question._id, type, coreData, this.props.history)
        }
    }

    componentDidMount() {
     this.props.getQuestions(this.props.match.params.type)     
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

        return (        
            <div className="content-wrapper">
                <ContentHeader heading="Create Question" subHeading="Questions"/>
                <div className="content">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="box box-primary">
                                <div className="box-header with-border">
                                    <h3 className="box-title">Question Form</h3>
                                </div>
                                <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                                    <div className="box-body">
                                      <Field
                                            component={TextFieldGroup}
                                            label="Question Name"
                                            name="qname"
                                            placeholder="Enter name for questions"
                                            // value={qname}
                                        />
                                        <Field
                                            component={TextFieldGroup}
                                            label="Question Label"
                                            name="qlabel"
                                            placeholder="Enter label of question"
                                            // value={qlabel}
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
                                            // value={inputOptions}
                                            info="For now please enter options field as : female; male; nogender"
                                        />
                                        }
                                    </div>
                                    <div className="box-footer">
                                        <button type="submit" className="btn btn-primary" disabled={invalid || submitting || pristine}>Submit</button>
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

const mapStateToProps = state => ({
    question: state.question
})

export default connect(mapStateToProps, { addIntroQuestion, addCoreQuestion, getQuestions })(withRouter(reduxForm({ form: "createQuestionForm", validate })(CreateQuestion)));


