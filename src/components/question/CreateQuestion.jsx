import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { addIntroQuestion, addCoreQuestion, getQuestions } from '../../actions/questionActions'
import TextFieldGroup from '../common/TextFieldGroup'

class CreateQuestion extends Component {
    state = {
        qname: '',
        qlabel: '',
        formType: '',
        inputOptions: '',
        showOptions: false,
    }
    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
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
        let { type, category } = this.props.match.params
        let  filterOpt = [];
        
        if(this.state.inputOptions.trim().length > 0){
           filterOpt = this.state.inputOptions.split(';').map((opt) => {
                return {
                    label: opt
                }
           })
        }

        if (category === 'IntroQuestion') {

            let introData = {
                name: this.state.qname,
                label: this.state.qlabel,
                formType: this.state.formType,
                options: filterOpt
            }
            this.props.addIntroQuestion(question._id, type, introData, this.props.history)
        } else {

        let coreData = {
            name: this.state.qname,
            label: this.state.qlabel,
            formType: this.state.formType,
            options: filterOpt
        }

        console.log("Coredata",coreData)
        this.props.addCoreQuestion(question._id, type, coreData, this.props.history)
        }
 

       


    }

    componentDidMount() {
    
            this.props.getQuestions(this.props.match.params.type)
       
    }

    render() {
        let { qname, qlabel, formType, showOptions, inputOptions } = this.state
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
                <div className="content-header">
                    <h1>
                        Create questions
              </h1>
                    <ol className="breadcrumb">
                        <li><Link to="/"><i className="fa fa-dashboard"></i> Home</Link></li>
                        <li><Link to="#">Questions</Link></li>
                        <li className="active">Create Question</li>
                    </ol>
                </div>
                <div className="content">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="box box-primary">
                                <div className="box-header with-border">
                                    <h3 className="box-title">Question Form</h3>
                                </div>
                                <form onSubmit={this.onSubmit}>
                                    <div className="box-body">
                                        <TextFieldGroup
                                            label="Question Name"
                                            name="qname"
                                            placeholder="Enter name for questions"
                                            value={qname}
                                            onChange={this.onChange}
                                        />
                                        <TextFieldGroup
                                            label="Question Label"
                                            name="qlabel"
                                            placeholder="Enter label of question"
                                            value={qlabel}
                                            onChange={this.onChange}
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
                                        <TextFieldGroup
                                            label="Options"
                                            name="inputOptions"
                                            placeholder="Enter options for question"
                                            value={inputOptions}
                                            onChange={this.onChange}
                                            info="For now please enter options field as : female; male; nogender"
                                        />
                                        }
                                    </div>
                                    <div className="box-footer">
                                        <button type="submit" className="btn btn-primary" >Submit</button>
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

export default connect(mapStateToProps, { addIntroQuestion, addCoreQuestion, getQuestions })(withRouter(CreateQuestion));
